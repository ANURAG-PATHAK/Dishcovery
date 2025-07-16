// Error handling middleware
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Default error
    let error = {
        message: err.message || 'Internal Server Error',
        status: err.status || 500
    };

    // Specific error handling can be added here
    if (err.name === 'ValidationError') {
        error.status = 400;
        error.message = 'Validation Error';
    }

    res.status(error.status).json({
        error: error.message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

// 404 handler
export const notFoundHandler = (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        method: req.method,
        url: req.originalUrl
    });
};
