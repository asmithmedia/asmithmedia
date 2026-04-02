<?php
/**
 * CORS Headers for Headless WordPress
 *
 * Allows the Next.js frontend at asmith.media to make
 * GraphQL and REST API requests to cms.asmith.media.
 *
 * Upload this file to: wp-content/mu-plugins/cors-headers.php
 */

add_action('init', function () {
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

    $allowed_origins = [
        'https://asmith.media',
        'https://www.asmith.media',
        'http://localhost:3000', // Local development
    ];

    if (in_array($origin, $allowed_origins, true)) {
        header("Access-Control-Allow-Origin: {$origin}");
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Credentials: true');
    }

    // Handle preflight OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
});
