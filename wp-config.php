<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'rulzzsec' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'rulzz' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '1488' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xicqLb_9TdHsXoF*MetHg8Bk(3T<C>j;x.fa=ibQX=2WAG*iK$2?91~2z5eg,u:a' );
define( 'SECURE_AUTH_KEY',  ';GT}Ra$oYg<&~YV$f@$_}D&9d:DQzb WoOwgL<Ozu|0_@(Uo$Sm]kdTE6hSThiI#' );
define( 'LOGGED_IN_KEY',    '%W(-}rH*3-V0Yq+T3)3`j{ZK8g~27 25gtKs`h<{l^`}E%eX{w.w}4/8}0^R>4.6' );
define( 'NONCE_KEY',        'yiE;|JN=15lq@yss3HSO4n1R!,.=r+3Sq,YD/M,tg0A5[P-aSPI,+=-k!;Zh;DNk' );
define( 'AUTH_SALT',        'WQ{Gks4g+paD%ZeBw=v(;dei1hdSCDNlY!}Fj9R/Sr&5%wpZ6{|.5i?}h`#A5>9W' );
define( 'SECURE_AUTH_SALT', 'l-0-WcikJ54:$9.!CKFi/Hz4LJX$$!;reJGvr*b8Cm:SSu?]:M5yh.9S3!JoV9VY' );
define( 'LOGGED_IN_SALT',   '>CjBm6MW7eT<C}h?FI^+08Nb3[CfK@pX@`]8<2]Drt>R6PX]=:VJJ?pRWy*.+<Mp' );
define( 'NONCE_SALT',       'j5?ePqvnM!c65R@b@Msz}=cgMdhT1I.i^Y!N[2_ dD2/FI^~Y#s78(uAh/eNzGD5' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
