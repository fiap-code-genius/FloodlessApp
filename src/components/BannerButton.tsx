import React from 'react';
import { Text, TouchableOpacity, ImageBackground, StyleSheet, ImageSourcePropType } from 'react-native';
import { BlurView } from 'expo-blur';

type BannerButtonProps = {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
};

export function BannerButton({ title, image, onPress }: BannerButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.bannerButton}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 20 }}
        resizeMode="cover"
      >
        <BlurView intensity={10} tint="prominent" style={styles.blurOverlay}>
          <Text style={styles.buttonText}>{title}</Text>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bannerButton: {
    width: 250,
    height: 150,
    marginVertical: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    paddingLeft: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
