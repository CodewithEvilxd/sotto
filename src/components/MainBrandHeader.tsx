/**
 * @file MainBrandHeader.tsx
 * @description Shared compact brand header for primary application pages.
 * @author Nishant Gaurav
 * @license MIT
 */

import { Image, StyleSheet, Text, View } from "react-native";
import { colors, onboardingFonts } from "@/constants/theme";
export function MainBrandHeader() {
  return (
    <View accessibilityLabel="Sotto" style={styles.header}>
      <Image
        resizeMode="contain"
        source={require("@/assets/brand-mark.png")}
        style={styles.logo}
      />
      <Text style={styles.name}>Sotto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 57, flexDirection: "row", alignItems: "center", gap: 14 },
  logo: { width: 48, height: 48 },
  name: {
    color: colors.ink,
    fontFamily: onboardingFonts.brandCursive,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0.3,
    includeFontPadding: false,
  },
});
