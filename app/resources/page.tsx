"use client"

// Resource type definitions
type ResourceType = "book" | "article" | "video" | "code" | "template" | "tool"
type ResourceLevel = "beginner" | "intermediate" | "advanced"

type Resource = {
  id: string
  title: string
  description: string
  type: ResourceType
  level: ResourceLevel
  url: string
  downloadable: boolean
  tags: string[]
  author?: string
  date?: string
  language: string
  content?: string // For articles and code that can be displayed directly
  previewImage?: string // For books, templates, etc.
}

// Sample resources data with content
const resources: Resource[] = [
  {
    id: "1",
    title: "WordPress to'liq qo'llanma",
    description:
      "WordPress CMS tizimini o'rnatishdan tortib to murakkab saytlarni yaratishgacha bo'lgan to'liq qo'llanma",
    type: "book",
    level: "beginner",
    url: "/resources/wordpress-guide.pdf",
    downloadable: true,
    tags: ["wordpress", "cms", "beginner"],
    author: "John Smith",
    date: "2023-05-15",
    language: "o'zbek",
    previewImage: "/placeholder.svg?height=800&width=600",
    content: `# WordPress to'liq qo'llanma

## Kirish
WordPress - bu dunyodagi eng mashhur kontent boshqaruv tizimidir. U saytlarning 40% dan ortig'ini boshqaradi. Ushbu qo'llanma sizga WordPress-ni o'rnatishdan tortib to murakkab saytlarni yaratishgacha bo'lgan barcha jarayonlarni o'rgatadi.

## 1-bob: WordPress-ni o'rnatish
WordPress-ni o'rnatish uchun sizga quyidagilar kerak bo'ladi:
- Hosting xizmati
- Domen nomi
- PHP va MySQL-ni qo'llab-quvvatlaydigan server

### O'rnatish bosqichlari:
1. WordPress-ni rasmiy saytdan yuklab oling
2. Fayllarni serverga yuklang
3. Ma'lumotlar bazasini yarating
4. O'rnatish ustasini ishga tushiring
5. Asosiy ma'lumotlarni kiriting

## 2-bob: WordPress boshqaruv paneli
WordPress boshqaruv paneli orqali siz saytingizni to'liq boshqarishingiz mumkin. Bu yerda siz:
- Postlar va sahifalar yaratishingiz
- Plaginlarni o'rnatishingiz
- Tashqi ko'rinishni o'zgartirishingiz
- Foydalanuvchilarni boshqarishingiz mumkin

## 3-bob: Tashqi ko'rinish va shablonlar
WordPress uchun minglab bepul va pullik shablonlar mavjud. Siz:
- Shablonlarni o'rnatish va faollashtirish
- Shablonlarni sozlash
- Maxsus shablonlar yaratish haqida bilib olasiz

## 4-bob: Plaginlar
Plaginlar WordPress funksionalligini kengaytiradi. Eng foydali plaginlar:
- Yoast SEO - SEO optimizatsiya uchun
- WooCommerce - onlayn do'kon yaratish uchun
- Contact Form 7 - aloqa formalarini yaratish uchun
- Elementor - sahifa yaratuvchi

## 5-bob: WordPress xavfsizligi
Saytingizni xavfsizligini ta'minlash uchun:
- Muntazam yangilab turing
- Kuchli parollardan foydalaning
- Xavfsizlik plaginlarini o'rnating
- Muntazam zaxira nusxalarini yarating

## Xulosa
WordPress o'rganish uchun oson, lekin ustoz bo'lish uchun vaqt talab qiladigan platforma. Ushbu qo'llanma sizga WordPress bilan ishlashning asosiy ko'nikmalarini beradi, lekin amaliyot orqali siz yanada ko'proq narsalarni o'rganasiz.`,
  },
  {
    id: "2",
    title: "Joomla asoslari",
    description: "Joomla CMS tizimini o'rnatish va undan foydalanish bo'yicha qo'llanma",
    type: "article",
    level: "beginner",
    url: "/resources/joomla-basics",
    downloadable: false,
    tags: ["joomla", "cms", "beginner"],
    author: "Sarah Johnson",
    date: "2023-06-20",
    language: "o'zbek",
    content: `# Joomla asoslari

Joomla - bu kuchli va moslashuvchan kontent boshqaruv tizimi (CMS) bo'lib, u veb-saytlarni yaratish va boshqarish uchun ishlatiladi. Bu WordPress va Drupal bilan birga eng mashhur CMS lardan biridir.

## Joomla nima uchun ishlatiladi?

Joomla quyidagi turdagi veb-saytlar uchun juda mos keladi:
- Korporativ veb-saytlar
- Onlayn jurnallar va nashrlar
- Elektron tijorat saytlari
- Jamoat portallari
- Shaxsiy portfoliolar
- Davlat tashkilotlari saytlari

## Joomla'ni o'rnatish

Joomla'ni o'rnatish uchun quyidagi talablar mavjud:
- PHP 7.0 yoki undan yuqori versiya
- MySQL 5.1 yoki undan yuqori versiya
- Apache yoki Nginx veb-server

### O'rnatish bosqichlari:

1. Joomla'ni rasmiy saytdan yuklab oling
2. Fayllarni serverga yuklang
3. Ma'lumotlar bazasini yarating
4. O'rnatish ustasini ishga tushiring
5. Asosiy ma'lumotlarni kiriting

## Joomla boshqaruv paneli

Joomla boshqaruv paneli orqali siz:
- Maqolalar va sahifalar yaratishingiz
- Menyu elementlarini boshqarishingiz
- Modullar va komponentlarni sozlashingiz
- Foydalanuvchilarni boshqarishingiz
- Tashqi ko'rinishni o'zgartirishingiz mumkin

## Joomla tushunchalari

Joomla'da bir nechta asosiy tushunchalar mavjud:
- **Maqolalar**: Saytdagi asosiy kontent
- **Kategoriyalar**: Maqolalarni guruhlash uchun
- **Menyu elementlari**: Sayt navigatsiyasi
- **Modullar**: Saytning turli qismlarida ko'rsatiladigan kontent bloklari
- **Komponentlar**: Katta funksional qo'shimchalar
- **Plaginlar**: Tizim funksionalligini kengaytiruvchi kichik qo'shimchalar
- **Shablonlar**: Saytning tashqi ko'rinishi

## Joomla kengaytmalari

Joomla uchun minglab kengaytmalar mavjud:
- **JoomShopping**: Elektron tijorat uchun
- **JCE Editor**: Kengaytirilgan matn muharriri
- **Akeeba Backup**: Zaxira nusxa yaratish uchun
- **Admin Tools**: Xavfsizlik va boshqaruv vositalari

## Xulosa

Joomla o'rganish uchun biroz murakkab bo'lishi mumkin, lekin u juda moslashuvchan va kuchli CMS hisoblanadi. Ushbu qo'llanma sizga Joomla bilan ishlashning asosiy ko'nikmalarini beradi, lekin amaliyot orqali siz yanada ko'proq narsalarni o'rganasiz.`,
  },
  {
    id: "3",
    title: "WordPress plaginlarini yaratish",
    description: "WordPress uchun o'z plaginlaringizni yaratishni o'rganish",
    type: "video",
    level: "intermediate",
    url: "https://example.com/wordpress-plugins",
    downloadable: false,
    tags: ["wordpress", "plugins", "development"],
    author: "David Brown",
    date: "2023-04-10",
    language: "o'zbek",
    previewImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Drupal tizimida ma'lumotlar bazasi bilan ishlash",
    description: "Drupal CMS tizimida ma'lumotlar bazasi bilan ishlash bo'yicha qo'llanma",
    type: "code",
    level: "advanced",
    url: "/resources/drupal-database.zip",
    downloadable: true,
    tags: ["drupal", "database", "advanced"],
    author: "Michael Lee",
    date: "2023-07-05",
    language: "o'zbek",
    content: `<?php
/**
  * Drupal tizimida ma'lumotlar bazasi bilan ishlash
  * 
  * Ushbu kod namunasi Drupal 9 tizimida ma'lumotlar bazasi bilan ishlashni ko'rsatadi
  */

// Ma'lumotlar bazasiga so'rov yuborish
function get_custom_data() {
  $database = \Drupal::database();
  
  // Oddiy so'rov
  $query = $database->select('node', 'n')
    ->fields('n', ['nid', 'title', 'created'])
    ->condition('n.type', 'article')
    ->condition('n.status', 1)
    ->orderBy('n.created', 'DESC')
    ->range(0, 10);
  
  $results = $query->execute()->fetchAll();
  
  return $results;
}

// Ma'lumotlar qo'shish
function add_custom_data($title, $content, $user_id) {
  $database = \Drupal::database();
  
  $database->insert('custom_table')
    ->fields([
      'title' => $title,
      'content' => $content,
      'user_id' => $user_id,
      'created' => \Drupal::time()->getRequestTime(),
    ])
    ->execute();
}

// Ma'lumotlarni yangilash
function update_custom_data($id, $title, $content) {
  $database = \Drupal::database();
  
  $database->update('custom_table')
    ->fields([
      'title' => $title,
      'content' => $content,
      'updated' => \Drupal::time()->getRequestTime(),
    ])
    ->condition('id', $id)
    ->execute();
}

// Ma'lumotlarni o'chirish
function delete_custom_data($id) {
  $database = \Drupal::database();
  
  $database->delete('custom_table')
    ->condition('id', $id)
    ->execute();
}

// Murakkab so'rov
function get_advanced_data() {
  $database = \Drupal::database();
  
  $query = $database->select('node', 'n');
  $query->join('node__field_category', 'c', 'n.nid = c.entity_id');
  $query->join('users_field_data', 'u', 'n.uid = u.uid');
  
  $query->fields('n', ['nid', 'title', 'created'])
    ->fields('u', ['name'])
    ->fields('c', ['field_category_target_id'])
    ->condition('n.type', 'article')
    ->condition('n.status', 1)
    ->condition('c.field_category_target_id', [1, 2, 3], 'IN')
    ->orderBy('n.created', 'DESC')
    ->range(0, 10);
  
  $results = $query->execute()->fetchAll();
  
  return $results;
}

// Drupal Entity API bilan ishlash
function work_with_entities() {
  // Node yaratish
  $node = \Drupal\node\Entity\Node::create([
    'type' => 'article',
    'title' => 'Yangi maqola',
    'body' => [
      'value' => 'Maqola matni',
      'format' => 'full_html',
    ],
    'field_category' => 1,
    'status' => 1,
  ]);
  
  $node->save();
  
  // Node ni yuklash
  $node = \Drupal\node\Entity\Node::load(1);
  
  // Node ni yangilash
  $node->set('title', 'Yangilangan sarlavha');
  $node->save();
  
  // Node ni o'chirish
  $node->delete();
}

// Drupal Config API bilan ishlash
function work_with_config() {
  // Konfiguratsiyani olish
  $config = \Drupal::config('system.site');
  $site_name = $config->get('name');
  
  // Konfiguratsiyani o'zgartirish
  $config = \Drupal::configFactory()->getEditable('system.site');
  $config->set('name', 'Yangi sayt nomi');
  $config->save();
}

// Drupal Cache API bilan ishlash
function work_with_cache() {
  // Keshga ma'lumot saqlash
  $cache = \Drupal::cache();
  $cache->set('my_module:my_data', $data, CacheBackendInterface::CACHE_PERMANENT);
  
  // Keshdan ma'lumot olish
  $cached = $cache->get('my_module:my_data');
  if ($cached) {
    $data = $cached->data;
  }
  
  // Keshni tozalash
  $cache->invalidate('my_module:my_data');
}
`,
  },
  {
    id: "5",
    title: "WordPress uchun responsive shablonlar",
    description: "WordPress uchun responsive shablonlar to'plami",
    type: "template",
    level: "intermediate",
    url: "/resources/wordpress-templates.zip",
    downloadable: true,
    tags: ["wordpress", "templates", "responsive"],
    author: "Emma Wilson",
    date: "2023-03-25",
    language: "o'zbek",
    previewImage: "/placeholder.svg?height=600&width=800",
    content: `# WordPress uchun responsive shablon

Bu WordPress uchun to'liq responsive shablon bo'lib, turli xil ekran o'lchamlariga moslashadi.

## Shablon xususiyatlari

- To'liq responsive dizayn
- Zamonaviy va toza ko'rinish
- SEO optimizatsiya qilingan
- Yuqori tezlik
- Barcha brauzerlar bilan mos
- WooCommerce bilan integratsiya
- Ko'p tilli qo'llab-quvvatlash

## HTML struktura

\`\`\`html
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header class="site-header">
        <div class="container">
            <div class="logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <h1><a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a></h1>
                <?php endif; ?>
            </div>
            <nav class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id' => 'primary-menu',
                    'container' => false,
                ));
                ?>
            </nav>
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <main id="content" class="site-content">
        <!-- Content goes here -->
    </main>

    <footer class="site-footer">
        <div class="container">
            <div class="footer-widgets">
                <div class="footer-widget">
                    <?php dynamic_sidebar('footer-1'); ?>
                </div>
                <div class="footer-widget">
                    <?php dynamic_sidebar('footer-2'); ?>
                </div>
                <div class="footer-widget">
                    <?php dynamic_sidebar('footer-3'); ?>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Barcha huquqlar himoyalangan.</p>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
\`\`\`

## CSS uslublar

\`\`\`css
/* Asosiy uslublar */
:root {
    --primary-color: #4a6bff;
    --secondary-color: #5d7aff;
    --text-color: #333;
    --light-gray: #f5f5f5;
    --dark-gray: #666;
    --white: #fff;
    --max-width: 1200px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;
}

/* Header uslublari */
.site-header {
    background-color: var(--white);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.site-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.logo a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
}

.main-navigation ul {
    display: flex;
    list-style: none;
}

.main-navigation li {
    margin-left: 20px;
}

.main-navigation a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.main-navigation a:hover {
    color: var(--primary-color);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    margin: 5px 0;
    transition: all 0.3s;
}

/* Responsive uslublar */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .main-navigation {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--white);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        display: none;
    }

    .main-navigation.active {
        display: block;
    }

    .main-navigation ul {
        flex-direction: column;
    }

    .main-navigation li {
        margin: 10px 0;
    }
}

/* Footer uslublari */
.site-footer {
    background-color: var(--light-gray);
    padding: 50px 0 20px;
    margin-top: 50px;
}

.footer-widgets {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 30px;
}

.footer-widget h2 {
    color: var(--primary-color);
    margin-bottom: 20px;
}

.copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    color: var(--dark-gray);
}

@media (max-width: 768px) {
    .footer-widgets {
        grid-template-columns: 1fr;
    }
}
\`\`\`

## JavaScript funksionallik

\`\`\`javascript
// Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');

    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('active');
            menuToggle.setAttribute(
                'aria-expanded',
                menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }

    // Responsive video o'lchamlarini sozlash
    const videos = document.querySelectorAll('iframe[src*="youtube"], iframe[src*="vimeo"]');
    videos.forEach(function(video) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('video-responsive');
        video.parentNode.insertBefore(wrapper, video);
        wrapper.appendChild(video);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    if (image.dataset.srcset) {
                        image.srcset = image.dataset.srcset;
                    }
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        let lazyLoadThrottleTimeout;
        
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }

            lazyLoadThrottleTimeout = setTimeout(function() {
                const scrollTop = window.pageYOffset;
                lazyImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        img.classList.remove('lazy');
                    }
                });
                if (lazyImages.length == 0) { 
                    document.removeEventListener('scroll', lazyLoad);
                    window.removeEventListener('resize', lazyLoad);
                    window.removeEventListener('orientationChange', lazyLoad);
                }
            }, 20);
        }

        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationChange', lazyLoad);
    }
});
\`\`\`

## WordPress funksiyalari (functions.php)

\`\`\`php
<?php
/**
 * Theme functions and definitions
 */

// Theme setup
function theme_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');

    // This theme uses wp_nav_menu() in one location
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'theme-textdomain'),
        'footer' => esc_html__('Footer Menu', 'theme-textdomain'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Add theme support for Custom Logo
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add support for WooCommerce
    add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'theme_setup');

// Register widget areas
function theme_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'theme-textdomain'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'theme-textdomain'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 1', 'theme-textdomain'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add footer widgets here.', 'theme-textdomain'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 2', 'theme-textdomain'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Add footer widgets here.', 'theme-textdomain'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 3', 'theme-textdomain'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Add footer widgets here.', 'theme-textdomain'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'theme_widgets_init');

// Enqueue scripts and styles
function theme_scripts() {
    wp_enqueue_style('theme-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_script('theme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true);
    wp_enqueue_script('theme-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'theme_scripts');
\`\`\`

## O'rnatish va foydalanish

1. Shablonni WordPress themes papkasiga yuklang
2. WordPress boshqaruv paneliga kiring
3. Appearance > Themes bo'limiga o'ting
4. Shablonni faollashtiring
5. Customize bo'limida shablonni sozlang

## Qo'shimcha ma'lumot

Ushbu shablon WordPress 5.0 va undan yuqori versiyalar uchun optimallashtirilgan. Gutenberg muharriri bilan to'liq mos keladi.`,
  },
  {
    id: "9",
    title: "WordPress saytlarini tezlashtirish",
    description: "WordPress saytlarini tezlashtirish va optimizatsiya qilish usullari",
    type: "video",
    level: "intermediate",
    url: "https://example.com/wordpress-speed",
    downloadable: false,
    tags: ["wordpress", "performance", "optimization"],
    author: "Laura Martinez",
    date: "2023-11-20",
    language: "o'zbek",
    previewImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "10",
    title: "CMS tizimlari uchun analitika vositalari",
    description: "CMS tizimlari uchun analitika vositalarini o'rnatish va ulardan foydalanish",
    type: "tool",
    level: "beginner",
    url: "/resources/cms-analytics.zip",
    downloadable: true,
    tags: ["analytics", "tools", "reporting"],
    author: "Kevin Thompson",
    date: "2023-12-05",
    language: "o'zbek",
    previewImage: "/placeholder.svg?height=500&width=700",
  },
]

export default function Page() {
  return (
    <>
      <div>
        <h1>Resources</h1>
        {/* Your resource display logic here */}
      </div>
    </>
  )
}
