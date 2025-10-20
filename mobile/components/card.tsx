import React from 'react';
import { Image, StyleSheet } from 'react-native';

type CardProps = {
  imageUrl: string;
};

export default function Card({ imageUrl }: CardProps) {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={styles.image}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 180,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF3366',
  },
});
