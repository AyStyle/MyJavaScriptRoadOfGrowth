/*
 * JavaScript的6大基本类型：
 *  1. String
 *  2. Number
 *  3. Boolean
 *  4. Undefined
 *  5. Null
 *  6. Object
 */


/**
 * String字符串
 *  - 在JS中字符串需要使用引号引起来
 *  - 使用双引号或单引号都可以，但不要混着用
 */
var str = "hello";
str ="world";

/**
 * Number数字
 * 在JS中所有的数值都是Number类型，包括整数和浮点数（小数）
 *
 * JS中Number的最大值：Number.MAX_VALUE
 * JS中Number正数的最小值：Number.MIN_VALUE
 * 如果Number表示的数字超过了Number.MAX_VALUE，则：使用Infinity（正无穷）
 * 如果Number返回的值为NaN（Not a Number），则：表示不是一个数字
 *
 * 如果使用JS进行浮点数计算，则：得到的结果可能不精确
 * 算钱的时候千万不要使用JS
 *
 * 可以使用typeof来检查一个变量的类型
 * 语法：typeof(表达式)和typeof 变量名
 */
var num = 123;


/**
 * Boolean布尔值
 * 布尔值只有两个：true和false
 */
var bool = true;

/**
 * Null
 * Null类型的值就只有一个：null
 * null专门用来表示一个为空的对象
 *
 * 使用typeof检查null时，会返回一个object
 */
var emptyObj = null;

/**
 * Undefined
 * Undefined类型的值也就只有一个：undefined
 * 当声明一个变量但不给变量赋值时，那么它的值就是undefined
 */
var undefined;

// TODO 明天学习P11，https://www.bilibili.com/video/BV1YW411T7GX?p=11&spm_id_from=pageDriver