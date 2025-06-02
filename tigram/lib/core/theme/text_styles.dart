import 'package:flutter/material.dart';
import 'colors.dart';

class AppTextStyles {
  static const title = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: AppColors.text,
  );

  static const body = TextStyle(fontSize: 16, color: AppColors.text);

  static const button = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.w600,
    color: Colors.white,
  );
}
