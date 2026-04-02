<?php
/**
 * Next.js Revalidation Webhook
 *
 * Triggers on-demand ISR revalidation on the Next.js frontend
 * whenever content is published or updated in WordPress.
 *
 * Upload this file to: wp-content/mu-plugins/revalidation-webhook.php
 *
 * IMPORTANT: Set your revalidation secret below (must match
 * the REVALIDATION_SECRET env var in Vercel).
 */

define('NEXTJS_REVALIDATION_URL', 'https://asmith.media/api/revalidate');
define('NEXTJS_REVALIDATION_SECRET', 'CHANGE_ME_TO_YOUR_SECRET');

/**
 * Send revalidation request to Next.js
 */
function asmith_revalidate_nextjs($tag = 'posts') {
    $url = NEXTJS_REVALIDATION_URL . '?secret=' . NEXTJS_REVALIDATION_SECRET;

    wp_remote_post($url, [
        'body'    => wp_json_encode(['tag' => $tag]),
        'headers' => ['Content-Type' => 'application/json'],
        'timeout' => 5,
    ]);
}

// Revalidate when posts are published/updated
add_action('publish_post', function ($post_id) {
    asmith_revalidate_nextjs('posts');
});

// Revalidate when pages are published/updated
add_action('publish_page', function ($post_id) {
    asmith_revalidate_nextjs('pages');
});

// Revalidate when custom post types are published
add_action('save_post_service', function ($post_id) {
    if (get_post_status($post_id) === 'publish') {
        asmith_revalidate_nextjs('services');
    }
});

add_action('save_post_testimonial', function ($post_id) {
    if (get_post_status($post_id) === 'publish') {
        asmith_revalidate_nextjs('testimonials');
    }
});

// Revalidate when ACF options are saved
add_action('acf/save_post', function ($post_id) {
    if ($post_id === 'options') {
        asmith_revalidate_nextjs('options');
    }
});
