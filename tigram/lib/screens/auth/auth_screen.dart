import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Welcome to Tigram',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            ElevatedButton(
              onPressed: () => context.go('/feed'),
              child: Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}
