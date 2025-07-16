import { cssInterop } from 'nativewind';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

cssInterop(Image, {
  className: 'style',
});
cssInterop(Link, {
  className: 'style',
});
