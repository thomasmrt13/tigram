import 'package:go_router/go_router.dart';
import 'package:tigram/screens/auth/auth_screen.dart';
import 'package:tigram/screens/feed/feed_screen.dart';

// GoRouter configuration
class AppRouter {
  static final GoRouter router = GoRouter(
    initialLocation: '/login',
    routes: [
      GoRoute(path: '/login', builder: (context, state) => const AuthScreen()),
      GoRoute(path: '/feed', builder: (context, state) => const FeedScreen()),
    ],
  );
}
