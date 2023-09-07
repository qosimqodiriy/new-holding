import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
    let i18n = createI18n({
        locale: 'ru',
        legacy: false,
        globalInjection: true,
        messages: {
            uz: {
                page_name_1: "Asosiy",
                page_name_2: "Kompaniya haqida",
                page_name_3: "Bizning manzillarimiz",
                page_name_4: "Galereya",
                page_name_5: "Yangiliklar",
                page_name_6: "Kontaktlar",
                
                page_title_1: "Kompaniya haqida",
                page_title_2: "Bizning manzillarimiz",
                page_title_3: "Bizning Galereyamiz",
                page_title_4: "Bizning yangiliklar",
                page_title_5: "Biz bilan bog'lanish",


                main_text_1: "Xolding haqida",
                main_text_2: "Yillar davomida JIP o'zini ishonchli va mas'uliyatli ishlab chiqaruvchi sifatida ko'rsatdi, uning mahsulotlariga ishonchingiz komil bo'ladi. Bugungi kunda korxona Markaziy Osiyodagi eng yirik avtomatlashtirilgan ishlab chiqarish majmualaridan biriga ega",
                main_text_2_2: "Biz sanoatlashtirish uchun mas'ul bo'lgan holda yangi standartlar va tendentsiyalarni yaratamiz. Biz an'anaviy biznes amaliyotlarini o'zgartirmoqdamiz, mijozlar, xodimlar, hamkorlar va jamiyat uchun samaradorlikni oshirmoqdamiz. Bizga, yetakchi xolding kompaniyasiga, birgalikda taraqqiyot va rivojlanishga ishoning.",
                main_text_3: "Xolding haqida batafsil",
                main_text_4: "Sertifikatlar",
                main_text_5: "Bozorda yillar",
                main_text_6: "Korxona mutaxassislari",
                main_text_7: "mln. dollarlik investitsiyalar jalb qilingan",
                main_text_8: "Xalqaro hamkorlar",
                main_text_9: "Bizning galereyamiz",
                main_text_10: "Toshkentdagi III Xalqaro Forum PLUSdan suratlar",
                main_text_11: "Toshkentdagi Meta va Admixer reklamasidan olingan suratlar",
                main_text_12: "Bizning manzillarimiz",
                main_text_13: "Yangiliklar",
                main_text_14: "Bog'lanish uchun ma'lumot",
                main_text_15: "Manzil:",
                main_text_16: "Telefon raqami:",
                main_text_17: "Ijtimoiy tarmoqlar",
                main_text_18: "Tel/Faks:",
                main_text_19: "Fikr-mulohaza shakli",
                main_text_20: "Ims familiyangiz",
                main_text_21: "Telefon raqam",
                main_text_22: "Xabar",
                main_text_23: "Yuborish",
                main_text_24: "Bizning hamkorlarimiz",

                about_text_1: "Bizning jamoamiz",
                about_text_2: "Bizning kareramiz",
                
                gallery_text_1: "Barcha Galereya",
                gallery_text_2: "Fotogalereya",
                gallery_text_3: "Video Galereya",
                
                news_text_1: "Boshqa yangiliklar",
                developer: "Veb-sayt NDC tomonidan ishlab chiqilgan",
                designer: "Dizayn tomonidan",
            },


            ru: {
                page_name_1: "Главная",
                page_name_2: "О компания",
                page_name_3: "Наши направления",
                page_name_4: "Галерея",
                page_name_5: "Новости",
                page_name_6: "Контакты",
                
                page_title_1: "О компания",
                page_title_2: "Наши направления",
                page_title_3: "Наши Галерея",
                page_title_4: "Наши Новости",
                page_title_5: "Связатся с нами",


                main_text_1: "О холдинге",
                main_text_2: "За годы существования компания JIP зарекомендовала себя как надежного и ответственного производителя, в продукции которого вы можете быть уверены. На сегодняшний день предприятие обладает одним из крупнейших в Средней Азии автоматизированным производственным комплексом",
                main_text_2_2: "Мы создаем новые стандарты и тренды, отвечая за индустриализацию. Изменяем традиционные методы бизнеса, повышая эффективность для клиентов, сотрудников, партнеров и общества. Доверьтесь нам, ведущей холдинговой компании, для прогресса и совместного развития.",
                main_text_3: "Подробнее о холдинге",
                main_text_4: "Сертификаты",
                main_text_5: "Года на рынке",
                main_text_6: "Специалистов на предприятиях",
                main_text_7: "млн. $ вовлечено инвестиций",
                main_text_8: "международных партнеров",
                main_text_9: "Наша галерея",
                main_text_10: "Фото с III Международного форума PLUS в Ташкенте",
                main_text_11: "Фото с Meta и Admixer Advertising в Ташкенте",
                main_text_12: "Наши направления",
                main_text_13: "Новости",
                main_text_14: "Контактная информация",
                main_text_15: "Адрес:",
                main_text_16: "Номер телефона:",
                main_text_17: "Социальные медиа",
                main_text_18: "Тел/Факс:",
                main_text_19: "Форма для обратной связи",
                main_text_20: "Ваше имя",
                main_text_21: "Номер телефона",
                main_text_22: "Сообщения",
                main_text_23: "Отправит",
                main_text_24: "Наши Партнеры",

                about_text_1: "Наша команда",
                about_text_2: "Наши карьера",
                
                gallery_text_1: "Все Галерея",
                gallery_text_2: "Фотогалерея",
                gallery_text_3: "Видеогалерея",
                
                news_text_1: "Другие новости",
                developer: "Сайт разработал NDC",
                designer: "Дизайнер",
            },


            en: {
                page_name_1: "Home",
                page_name_2: "About company",
                page_name_3: "Our destinations",
                page_name_4: "Gallery",
                page_name_5: "News",
                page_name_6: "Contacts",
                
                page_title_1: "About company",
                page_title_2: "Our destinations",
                page_title_3: "Our Gallery",
                page_title_4: "Our news",
                page_title_5: "Contact us",


                main_text_1: "About the holding",
                main_text_2: "Over the years, JIP has established itself as a reliable and responsible manufacturer whose products you can be sure of. Today the enterprise has one of the largest automated production complex in Central Asia",
                main_text_2_2: "We create new standards and trends, being responsible for industrialization. We are changing traditional business practices, increasing efficiency for customers, employees, partners and society. Trust us, the leading holding company, to progress and develop together.",
                main_text_3: "More about the holding",
                main_text_4: "Certificates",
                main_text_5: "Years on the market",
                main_text_6: "Enterprise specialists",
                main_text_7: "mln. $ investments involved",
                main_text_8: "International partners",
                main_text_9: "Our gallery",
                main_text_10: "Photos from the III International Forum PLUS in Tashkent",
                main_text_11: "Photos from Meta and Admixer Advertising in Tashkent",
                main_text_12: "Certificates",
                main_text_13: "News",
                main_text_14: "Contact Information",
                main_text_15: "Address:",
                main_text_16: "Phone number:",
                main_text_17: "Social media",
                main_text_18: "Tel/Fax:",
                main_text_19: "Feedback form",
                main_text_20: "Your name",
                main_text_21: "Phone number",
                main_text_22: "Messages",
                main_text_23: "Send",
                main_text_24: "Our partners",

                about_text_1: "Our team",
                about_text_2: "Our careers",
                
                gallery_text_1: "All Gallery",
                gallery_text_2: "Photo gallery",
                gallery_text_3: "Video gallery",
                
                news_text_1: "Other news",
                developer: "Website developed by NDC",
                designer: "Design by",
            }
        }
    })

    vueApp.use(i18n)
})