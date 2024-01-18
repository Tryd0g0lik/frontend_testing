[Look the www-page](https://tryd0g0lik.github.io/frontend_testing_net/) [![Build status](https://ci.appveyor.com/api/projects/status/rm29bx779xbway5p?svg=true)](https://ci.appveyor.com/project/Tryd0g0lik/frontend-testing-net)


Условия приёма:

1. **Важно**: всё собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через Appveyor.
1. e2e-тестированиеж
1. unit-testing.

---

### Credit Card Validator

Задача: сделать виджет, позволяющий вводить номер карты (можете в качестве общего развития почитать про PCI DSS).

Общий вид виджета должен выглядеть следующим образом:

![sasas](./src/pic/validator.png) \
Скриншот взят с сайта http://www.validcreditcardnumber.com.


#### Описание
Вам нужно провести исследовательскую работу и выяснить - на базе чего определяется, какой платёжной системе принадлежит определённая карта (не забудьте про "Мир").

**Алгоритм Lunha** \
Используйте [следующий алгоритм](https://en.wikipedia.org/wiki/Luhn_algorithm) для проверки валидности номера карты.

Изображения для карт необходимо найти самостоятельно (помните, про авторские права и недопустимость нелегального использования). 

+ нужна логика проверки номера карты;
+ выяснения принадлежности определённой платёжной системе.
+ нужны авто-тесты на функции проверки номера карты и принадлежности определённой платёжной системе.

В качестве источника номеров карт используйте сервис [FreeFormatter](https://www.freeformatter.com/credit-card-number-generator-validator.html). \


Через Puppeteer и проверьте взаимодействие для двух различных вариантов:
1. Ввод валидного номера карты
1. Ввод невалидного номера краты

Удостоверьтесь, что всё работает при прогоне тестов в Appveyor (не забудьте про headless-mode).

## Заметки
### Номера карт начинаются с

2-Мир \
3- American Express, JCB International, Diners Club \
____30,36,38-Diners Club \
____31,35-JCB International \
____34,37-American Express \
4- VISA \
5- MasterCard, Maestro \
____50,56,57,58-Maestro \
____51,52,53,54,55-MasterCard \
6- Maestro, China UnionPay, Discover \
____60-Discover \
____62 - China UnionPay \
____63, 67 - Maestro \
7-УЭК \
<br>
Первые 6 цифр - это БИН ( Банковский Идентификационный Номер ) выпустившего карту банка. \
А это сервис, позволяющий по [БИН узнать название банка](https://psm7.com/bin-card)

## The code
Код рабочий на "github-pages". Не чистил от логов.
