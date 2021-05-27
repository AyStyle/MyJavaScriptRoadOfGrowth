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
str = "world";

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


/**
 * 强制类型转换
 * 指将一个数据类型强制转换为其他的数据类型
 * 这里的类型转换是Number、String、Boolean互转
 *
 * 转换为String：
 *      方式一：调用被转换数据类型的toString()方法
 *             该方法不会影响到原变量，它会将转换的结果返回
 *             注意：null和undefined这两个值没有toString方法，如果调用的话会报错
 *
 *      方式二：调用String()函数
 *              使用String()函数做强制类型转换时，对于Number和Boolean实际上就是调用toString()方法
 *             但是对于null和undefined，就不会调用toString()方法，它会将null直接转为"null"，将undefined转为"undefined"
 *
 * 转换为Number：
 *      方式一：调用Number()函数
 *             1. 字符串：如果字符串为纯数字，则：直接转换；如果字符串为空或全是空格，则：转为0；其他情况为：NaN
 *             2. 布尔：true转为1，False转为0
 *             3. Null转为0
 *             4. Undefined转为NaN
 *
 *      方式二：专门用来对付字符串
 *             parseInt() 调用该函数将字符串转为int类型，字符串从左开始读起，遇到非数字停止
 *             parseFloat() 调用该函数将字符串转为float类型，字符串从左开始读起，遇到非数字停止
 *
 * 转换为Boolean：
 *      使用Boolean()函数
 *      1. 数字转Boolean：除了0和NaN，其余的都是true
 *      2. 字符串转Boolean：除了空串，其余都是true
 *      3. null和undefined转为false
 *      4. 对象转为true
 */
var numToStr = 123;
numToStr = numToStr.toString()

var strToNum = "123"
strToNum = Number(strToNum)
strToNum = parseInt(strToNum)

/**
 * 其他进制的数字
 *
 * 16进制：0x开头
 * 8进制：0开头
 * 2进制：0b开头
 */

/**
 * 运算符也叫做操作符
 * 通过运算符可以对一个或多个值进行运算，并获取运算结果
 *
 * 算术运算符：
 *      任何值和NaN运算都是NaN
 *      非Number类型的，会先转换为Number类型再进行计算
 *
 *      +：可以对两个值进行加法运算，并将结果返回。
 *          特例：两个字符串相加会是将字符串拼接起来
 *               任何值和字符串相加，都会先转为字符串，然后再相加
 *      -：可以对两个值进行减法运算，并将结果返回
 *      *：可以对两个值进行乘法运算，并将结果返回
 *      /：可以对两个值进行除法运算，并将结果返回
 *      %：可以对两个值进行取模运算，并将结果返回
 *      注意：除了 + ，其余方法与字符串计算时，都是转为Number类型再计算
 */


/**
 * 一元运算符，只需要一个操作数
 * + 正号：
 * - 负号：对数字去反，如果是非Number类型的，那么会先转为Number，然后取反
 *
 *
 */
var a = 1 + 1;

/**
 * 自增：通过自增可以使变量在自身的基础上增加1
 * 无论是a++，还是++a，都会立即使原变量的值自增1
 * 不同的是a++的值和++a的值不同，++a返回自增后的值，a++返回自增前的值
 *
 * 自减：通过自增可以使变量在自身的基础上减少1
 * 与自增一样，只不过逻辑相反
 */
var a = 1;
a++;
++a;

/**
 * 逻辑运算符
 * JS中有三种逻辑运算符：!非 &&与 ||或
 *
 * !：对bool值取反。如果是number，会先转为bool再取反
 * &&：当两个值都为true时，返回true，否则false
 * ||：当两个值都为false时，返回false，否则true
 *
 */

/**
 * 赋值运算符：
 *  a += 1, a = a + 1
 *  a -= 1, a = a - 1
 *  a *= 1, a = a * 1
 *  a /= 1, a = a / 1
 *  a %= 1, a = a % 1
 */

/**
 * 通过关系运算符可以比较两个值之间的大小关系
 * > 大于号：判断左侧的值是否大于右侧的值，成立返回true，否则false
 * < 小于号：判断左侧的值是否小于右侧的值，成立返回true，否则false
 * >= 大于等于号：判断左侧的值是否大于等于右侧的值，成立返回true，否则false
 * <= 小于等于号：判断左侧的值是否小于等于右侧的值，成立返回true，否则false
 * == 等于号：判断左侧的值是否等于右侧的值，成立返回true，否则false
 *    1. NaN不和任何职相等，包括他自身。使用isNaN()判断是否为NaN
 *    2. null和undefined相等
 *    3. 不同类型的数据进行比较时，会转为Number来进行比较
 * != 不等于：判断左侧的值是否不等于右侧的值，成立返回true，否则false
 * === 全等于：判断一个值是否全等，与相等类似，但是不会进行类型转换
 * !== 不全等：判断一个值是否不全等，与不等类似，但是不会进行类型转换
 *
 * 非数值比较：
 *      1. NaN和任意值比较都是false
 *      2. 如果符号两侧的值都是字符串，则会比较字符的编码。当两个字符一样时，则比较下一位
 */


/**
 * 条件运算符也叫三元运算符
 * 语法：
 *      条件表达式 ? 语句1 : 语句2;
 *
 * 执行流程：
 *      条件运算符在执行时，首先对条件表达式进行求值：true执行语句1，并返回语句1的结果；false执行语句2，并返回语句2的结果
 *
 * 当条件表达式不是布尔值时，会转为布尔值
 */
var a = 'abc' > 'bcd' ? 'aaa' : 'bbb';


/**
 * ,可以实现一行写多条语句
 */
/**
 * if语句
 *      语法一：
 *          if (条件表达式)
 *              语句;
 *
 *          if语句在执行时，会先对条件表达式进行求值判断，
 *          如果条件表达式的值为true，则执行if后的语句，
 *          如果条件表达式的值为false，则不会执行if后的语句。
 *
 *          if语句只能控制紧跟后面的一条语句，如果想控制多条语句，可以将多条语句放到代码块中。
 *
 *     语法二：
 *          if (条件表达式){
 *              语句1;
 *          }else{
 *              语句2;
 *          }
 *
 *          if语句在执行时，会先对条件表达式进行求值判断，
 *          如果条件表达式的值为true，则执行if后的语句，
 *          如果条件表达式的值为false，则执行else后的语句。
 *
 *     语法三：
 *          if (条件表达式){
 *              语句1;
 *          }else if (条件表达式) {
 *              语句2;
 *          }else{
 *              语句3;
 *          }
 *
 */
if (true) {
    alert('执行语句');
}

/**
 * 条件分支语句：
 *      switch(条件表达式){
 *          case 表达式1：
 *              语句1;
 *              break;
 *          case 表达式2：
 *              语句2;
 *              break;
 *          case 表达式3：
 *              语句3;
 *              break;
 *          default：
 *              语句4;
 *      }
 *
 */
switch(a){
    case 1:
        alert(1);
        break;
    case 2:
        alert(1);
        break;
    case 3:
        alert(1);
        break;
    default:
        alert('default');
}


// TODO 明天学习P35，https://www.bilibili.com/video/BV1YW411T7GX?p=22