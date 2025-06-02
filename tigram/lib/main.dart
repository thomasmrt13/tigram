import 'package:flutter/material.dart';
import 'package:tigram/core/theme/app_them.dart';
import 'rooting/rooter.dart';

void main() {
  runApp(
    MaterialApp.router(
      routerConfig: AppRouter.router,
      title: 'Tigram',
      theme: AppTheme.light,
      debugShowCheckedModeBanner: false,
    ),
  );
}
