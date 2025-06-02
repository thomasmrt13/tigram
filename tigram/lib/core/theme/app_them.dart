import 'package:flutter/material.dart';
import 'colors.dart';
import 'text_styles.dart';

class AppTheme {
  static ThemeData get light {
    return ThemeData(
      colorScheme: ColorScheme.fromSeed(
        seedColor: AppColors.primary,
        brightness: Brightness.light,
      ),
      scaffoldBackgroundColor: AppColors.background,
      textTheme: const TextTheme(
        bodyMedium: AppTextStyles.body,
        titleLarge: AppTextStyles.title,
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: AppColors.background,
        iconTheme: IconThemeData(color: AppColors.text),
      ),
      useMaterial3: true,
    );
  }
}
