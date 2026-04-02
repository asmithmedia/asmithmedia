<?php
/**
 * Headless Redirect
 *
 * Redirects all frontend (non-admin) visitors to the Next.js site.
 * WordPress remains accessible at cms.asmith.media/wp-admin.
 *
 * Upload this file to: wp-content/mu-plugins/headless-redirect.php
 */

add_action('template_redirect', function () {
    if (is_admin() || wp_doing_ajax()) {
        return;
    }

    $uri = $_SERVER['REQUEST_URI'];

    // Allow WordPress admin, login, API, and GraphQL requests
    $allowed = ['/graphql', '/wp-json', '/wp-admin', '/wp-login', '/wp-cron'];
    foreach ($allowed as $path) {
        if (strpos($uri, $path) !== false) {
            return;
        }
    }

    // Allow uploads/media files to be served directly
    if (strpos($uri, '/wp-content/uploads') !== false) {
        return;
    }

    wp_redirect('https://asmith.media' . $uri, 301);
    exit;
});
