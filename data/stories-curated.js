// Curated, longer-form stories filling gaps in the library:
// classic fables, practical dialogues, cultural content, letters, descriptions.
// Appended to window.STORIES after stories-extra.js.
(function () {
  const curated = [
    // ============ NEWBIE: classic fable ============
    {
      id: "c1", level: "newbie",
      title: { hz: "乌鸦喝水", py: "Wūyā hē shuǐ", en: "The Thirsty Crow" },
      description: "A classic Chinese fable — a clever crow solves a problem.",
      sentences: [
        { en: "A crow was very thirsty.", words: [
          {hz:"一只", py:"yì zhī", en:"a (one)"},
          {hz:"乌鸦", py:"wūyā", en:"crow"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"渴。", py:"kě", en:"thirsty"}
        ]},
        { en: "It wanted to drink water.", words: [
          {hz:"它", py:"tā", en:"it"},
          {hz:"想", py:"xiǎng", en:"wants to"},
          {hz:"喝", py:"hē", en:"drink"},
          {hz:"水。", py:"shuǐ", en:"water"}
        ]},
        { en: "It saw a bottle.", words: [
          {hz:"它", py:"tā", en:"it"},
          {hz:"看到", py:"kàndào", en:"saw"},
          {hz:"一个", py:"yí ge", en:"a"},
          {hz:"瓶子。", py:"píngzi", en:"bottle"}
        ]},
        { en: "There was water in the bottle, but very little.", words: [
          {hz:"瓶子", py:"píngzi", en:"bottle"},
          {hz:"里", py:"lǐ", en:"inside"},
          {hz:"有", py:"yǒu", en:"has"},
          {hz:"水,", py:"shuǐ", en:"water"},
          {hz:"可是", py:"kěshì", en:"but"},
          {hz:"水", py:"shuǐ", en:"water"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"少。", py:"shǎo", en:"little"}
        ]},
        { en: "The crow could not reach the water.", words: [
          {hz:"乌鸦", py:"wūyā", en:"crow"},
          {hz:"喝", py:"hē", en:"drink"},
          {hz:"不到", py:"bú dào", en:"cannot reach"},
          {hz:"水。", py:"shuǐ", en:"water"}
        ]},
        { en: "It thought, and saw small stones nearby.", words: [
          {hz:"它", py:"tā", en:"it"},
          {hz:"想了想,", py:"xiǎng le xiǎng", en:"thought for a moment"},
          {hz:"看到", py:"kàndào", en:"saw"},
          {hz:"旁边", py:"pángbiān", en:"nearby"},
          {hz:"有", py:"yǒu", en:"there are"},
          {hz:"小", py:"xiǎo", en:"small"},
          {hz:"石头。", py:"shítou", en:"stones"}
        ]},
        { en: "The crow dropped the stones into the bottle, one by one.", words: [
          {hz:"乌鸦", py:"wūyā", en:"crow"},
          {hz:"把", py:"bǎ", en:"(took)"},
          {hz:"石头", py:"shítou", en:"stones"},
          {hz:"一个一个", py:"yí ge yí ge", en:"one by one"},
          {hz:"放进", py:"fàngjìn", en:"put into"},
          {hz:"瓶子", py:"píngzi", en:"bottle"},
          {hz:"里。", py:"lǐ", en:"inside"}
        ]},
        { en: "The water slowly rose up.", words: [
          {hz:"水", py:"shuǐ", en:"water"},
          {hz:"慢慢", py:"mànmàn", en:"slowly"},
          {hz:"升", py:"shēng", en:"rose"},
          {hz:"上来", py:"shànglai", en:"up"},
          {hz:"了。", py:"le", en:"(past)"}
        ]},
        { en: "At last, the crow drank the water.", words: [
          {hz:"最后,", py:"zuìhòu", en:"finally"},
          {hz:"乌鸦", py:"wūyā", en:"crow"},
          {hz:"喝到", py:"hēdào", en:"drank"},
          {hz:"了", py:"le", en:"(past)"},
          {hz:"水。", py:"shuǐ", en:"water"}
        ]},
        { en: "The crow is very clever!", words: [
          {hz:"乌鸦", py:"wūyā", en:"crow"},
          {hz:"真", py:"zhēn", en:"really"},
          {hz:"聪明!", py:"cōngmíng", en:"clever"}
        ]}
      ]
    },

    // ============ NEWBIE: pandas / China intro ============
    {
      id: "c2", level: "newbie",
      title: { hz: "大熊猫", py: "Dà xióngmāo", en: "Giant Pandas" },
      description: "Simple facts about China's most famous animal.",
      sentences: [
        { en: "The giant panda is China's national treasure.", words: [
          {hz:"大熊猫", py:"dà xióngmāo", en:"giant panda"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"中国", py:"Zhōngguó", en:"China's"},
          {hz:"的", py:"de", en:"(possessive)"},
          {hz:"国宝。", py:"guóbǎo", en:"national treasure"}
        ]},
        { en: "Pandas live in the mountains of southwestern China.", words: [
          {hz:"熊猫", py:"xióngmāo", en:"pandas"},
          {hz:"住在", py:"zhù zài", en:"live in"},
          {hz:"中国", py:"Zhōngguó", en:"China's"},
          {hz:"西南", py:"xīnán", en:"southwest"},
          {hz:"的", py:"de", en:"(possessive)"},
          {hz:"山里。", py:"shān lǐ", en:"mountains"}
        ]},
        { en: "They have black and white fur.", words: [
          {hz:"它们", py:"tāmen", en:"they"},
          {hz:"有", py:"yǒu", en:"have"},
          {hz:"黑白", py:"hēibái", en:"black and white"},
          {hz:"的", py:"de", en:"(possessive)"},
          {hz:"毛。", py:"máo", en:"fur"}
        ]},
        { en: "Pandas love eating bamboo.", words: [
          {hz:"熊猫", py:"xióngmāo", en:"pandas"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"竹子。", py:"zhúzi", en:"bamboo"}
        ]},
        { en: "They eat bamboo for over ten hours every day.", words: [
          {hz:"它们", py:"tāmen", en:"they"},
          {hz:"每天", py:"měi tiān", en:"every day"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"十", py:"shí", en:"ten"},
          {hz:"几", py:"jǐ", en:"several"},
          {hz:"个", py:"ge", en:"(measure)"},
          {hz:"小时", py:"xiǎoshí", en:"hours"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"竹子。", py:"zhúzi", en:"bamboo"}
        ]},
        { en: "In the morning they sleep; in the afternoon they climb trees.", words: [
          {hz:"早上", py:"zǎoshang", en:"morning"},
          {hz:"它们", py:"tāmen", en:"they"},
          {hz:"睡觉,", py:"shuìjiào", en:"sleep"},
          {hz:"下午", py:"xiàwǔ", en:"afternoon"},
          {hz:"爬", py:"pá", en:"climb"},
          {hz:"树。", py:"shù", en:"trees"}
        ]},
        { en: "Baby pandas are pink at first.", words: [
          {hz:"小", py:"xiǎo", en:"baby"},
          {hz:"熊猫", py:"xióngmāo", en:"pandas"},
          {hz:"刚", py:"gāng", en:"just"},
          {hz:"生", py:"shēng", en:"born"},
          {hz:"的", py:"de", en:"(when)"},
          {hz:"时候", py:"shíhou", en:"time"},
          {hz:"是", py:"shì", en:"are"},
          {hz:"粉色", py:"fěnsè", en:"pink"},
          {hz:"的。", py:"de", en:"(emphasis)"}
        ]},
        { en: "Many tourists come from all over the world to see them.", words: [
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"游客", py:"yóukè", en:"tourists"},
          {hz:"从", py:"cóng", en:"from"},
          {hz:"世界", py:"shìjiè", en:"world"},
          {hz:"各地", py:"gèdì", en:"all places"},
          {hz:"来", py:"lái", en:"come"},
          {hz:"看", py:"kàn", en:"to see"},
          {hz:"它们。", py:"tāmen", en:"them"}
        ]},
        { en: "Pandas are really cute.", words: [
          {hz:"熊猫", py:"xióngmāo", en:"pandas"},
          {hz:"真", py:"zhēn", en:"really"},
          {hz:"可爱!", py:"kě'ài", en:"cute"}
        ]}
      ]
    },

    // ============ BEGINNER: cultural ============
    {
      id: "c3", level: "beginner",
      title: { hz: "春节快乐", py: "Chūnjié kuàilè", en: "Happy Spring Festival" },
      description: "How Chinese families celebrate the Lunar New Year.",
      sentences: [
        { en: "Spring Festival is China's most important holiday.", words: [
          {hz:"春节", py:"Chūnjié", en:"Spring Festival"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"中国", py:"Zhōngguó", en:"China's"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"重要", py:"zhòngyào", en:"important"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"节日。", py:"jiérì", en:"holiday"}
        ]},
        { en: "Every year in January or February, we celebrate it.", words: [
          {hz:"每年", py:"měi nián", en:"every year"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"一月", py:"yī yuè", en:"January"},
          {hz:"或", py:"huò", en:"or"},
          {hz:"二月,", py:"èr yuè", en:"February"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"过", py:"guò", en:"celebrate"},
          {hz:"春节。", py:"Chūnjié", en:"Spring Festival"}
        ]},
        { en: "Before the festival, the whole family cleans the house together.", words: [
          {hz:"春节", py:"Chūnjié", en:"Spring Festival"},
          {hz:"前,", py:"qián", en:"before"},
          {hz:"全家", py:"quán jiā", en:"whole family"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"打扫", py:"dǎsǎo", en:"clean"},
          {hz:"房子。", py:"fángzi", en:"house"}
        ]},
        { en: "We stick red couplets on the doors.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"在", py:"zài", en:"on"},
          {hz:"门上", py:"mén shàng", en:"the door"},
          {hz:"贴", py:"tiē", en:"stick"},
          {hz:"红色", py:"hóngsè", en:"red"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"对联。", py:"duìlián", en:"couplets"}
        ]},
        { en: "On New Year's Eve, the whole family eats dinner together.", words: [
          {hz:"除夕", py:"chúxī", en:"New Year's Eve"},
          {hz:"晚上,", py:"wǎnshang", en:"evening"},
          {hz:"全家人", py:"quán jiā rén", en:"whole family"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"年夜饭。", py:"nián yè fàn", en:"reunion dinner"}
        ]},
        { en: "Everyone loves dumplings and fish.", words: [
          {hz:"大家", py:"dàjiā", en:"everyone"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"吃", py:"chī", en:"eating"},
          {hz:"饺子", py:"jiǎozi", en:"dumplings"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"鱼。", py:"yú", en:"fish"}
        ]},
        { en: "Children receive red envelopes and are very happy.", words: [
          {hz:"孩子们", py:"háizimen", en:"children"},
          {hz:"收到", py:"shōudào", en:"receive"},
          {hz:"红包,", py:"hóngbāo", en:"red envelopes"},
          {hz:"非常", py:"fēicháng", en:"very"},
          {hz:"开心。", py:"kāixīn", en:"happy"}
        ]},
        { en: "At night we watch the Spring Festival Gala.", words: [
          {hz:"晚上", py:"wǎnshang", en:"at night"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"看", py:"kàn", en:"watch"},
          {hz:"春节", py:"Chūnjié", en:"Spring Festival"},
          {hz:"晚会。", py:"wǎnhuì", en:"Gala"}
        ]},
        { en: "At midnight, there are fireworks outside.", words: [
          {hz:"十二点,", py:"shí èr diǎn", en:"at twelve"},
          {hz:"外面", py:"wàimiàn", en:"outside"},
          {hz:"有", py:"yǒu", en:"there are"},
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"烟花。", py:"yānhuā", en:"fireworks"}
        ]},
        { en: "The next day, we visit relatives' homes.", words: [
          {hz:"第二天,", py:"dì èr tiān", en:"the next day"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"亲戚", py:"qīnqi", en:"relatives'"},
          {hz:"家", py:"jiā", en:"home"},
          {hz:"拜年。", py:"bàinián", en:"pay New Year greetings"}
        ]},
        { en: "Everyone wishes each other \"Happy New Year.\"", words: [
          {hz:"大家", py:"dàjiā", en:"everyone"},
          {hz:"互相", py:"hùxiāng", en:"mutually"},
          {hz:"说", py:"shuō", en:"say"},
          {hz:"\"新年快乐\"。", py:"xīnnián kuàilè", en:"\"Happy New Year\""}
        ]},
        { en: "Spring Festival is really lively!", words: [
          {hz:"春节", py:"Chūnjié", en:"Spring Festival"},
          {hz:"真", py:"zhēn", en:"really"},
          {hz:"热闹!", py:"rènao", en:"lively"}
        ]}
      ]
    },

    // ============ BEGINNER: practical dialogue ============
    {
      id: "c4", level: "beginner",
      title: { hz: "在餐厅", py: "Zài cāntīng", en: "At the Restaurant" },
      description: "Ordering a meal — a useful real-world dialogue.",
      sentences: [
        { en: "Waiter: Hello, how many people?", words: [
          {hz:"服务员:", py:"fúwùyuán", en:"waiter"},
          {hz:"您好,", py:"nín hǎo", en:"hello (polite)"},
          {hz:"几", py:"jǐ", en:"how many"},
          {hz:"位?", py:"wèi", en:"people (polite)"}
        ]},
        { en: "Customer: Two, please.", words: [
          {hz:"客人:", py:"kèrén", en:"customer"},
          {hz:"两", py:"liǎng", en:"two"},
          {hz:"位,", py:"wèi", en:"people"},
          {hz:"谢谢。", py:"xièxie", en:"thank you"}
        ]},
        { en: "Waiter: This way, please. Here's the menu.", words: [
          {hz:"服务员:", py:"fúwùyuán", en:"waiter"},
          {hz:"这边", py:"zhèbiān", en:"this way"},
          {hz:"请,", py:"qǐng", en:"please"},
          {hz:"这", py:"zhè", en:"this"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"菜单。", py:"càidān", en:"menu"}
        ]},
        { en: "Customer: Thanks. What do you recommend?", words: [
          {hz:"客人:", py:"kèrén", en:"customer"},
          {hz:"谢谢。", py:"xièxie", en:"thanks"},
          {hz:"请问", py:"qǐngwèn", en:"may I ask"},
          {hz:"你们", py:"nǐmen", en:"you (plural)"},
          {hz:"推荐", py:"tuījiàn", en:"recommend"},
          {hz:"什么?", py:"shénme", en:"what"}
        ]},
        { en: "Waiter: Our kung pao chicken is very famous.", words: [
          {hz:"服务员:", py:"fúwùyuán", en:"waiter"},
          {hz:"我们", py:"wǒmen", en:"our"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"宫保鸡丁", py:"gōngbǎo jīdīng", en:"kung pao chicken"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"有名。", py:"yǒumíng", en:"famous"}
        ]},
        { en: "Customer: Great, one kung pao chicken please.", words: [
          {hz:"客人:", py:"kèrén", en:"customer"},
          {hz:"好,", py:"hǎo", en:"great"},
          {hz:"来", py:"lái", en:"bring"},
          {hz:"一份", py:"yí fèn", en:"one order"},
          {hz:"宫保鸡丁。", py:"gōngbǎo jīdīng", en:"kung pao chicken"}
        ]},
        { en: "Waiter: Would you like rice?", words: [
          {hz:"服务员:", py:"fúwùyuán", en:"waiter"},
          {hz:"要", py:"yào", en:"want"},
          {hz:"米饭", py:"mǐfàn", en:"rice"},
          {hz:"吗?", py:"ma", en:"(question)"}
        ]},
        { en: "Customer: Two bowls, and a vegetable dish too.", words: [
          {hz:"客人:", py:"kèrén", en:"customer"},
          {hz:"要", py:"yào", en:"want"},
          {hz:"两", py:"liǎng", en:"two"},
          {hz:"碗,", py:"wǎn", en:"bowls"},
          {hz:"再", py:"zài", en:"also"},
          {hz:"来", py:"lái", en:"bring"},
          {hz:"一个", py:"yí ge", en:"one"},
          {hz:"青菜。", py:"qīngcài", en:"vegetable"}
        ]},
        { en: "Waiter: What would you like to drink?", words: [
          {hz:"服务员:", py:"fúwùyuán", en:"waiter"},
          {hz:"喝", py:"hē", en:"drink"},
          {hz:"什么?", py:"shénme", en:"what"}
        ]},
        { en: "Customer: Two cups of tea, thank you.", words: [
          {hz:"客人:", py:"kèrén", en:"customer"},
          {hz:"两", py:"liǎng", en:"two"},
          {hz:"杯", py:"bēi", en:"cups"},
          {hz:"茶,", py:"chá", en:"tea"},
          {hz:"谢谢。", py:"xièxie", en:"thank you"}
        ]},
        { en: "Waiter: Alright, please wait a moment.", words: [
          {hz:"服务员:", py:"fúwùyuán", en:"waiter"},
          {hz:"好的,", py:"hǎo de", en:"okay"},
          {hz:"请", py:"qǐng", en:"please"},
          {hz:"稍", py:"shāo", en:"briefly"},
          {hz:"等。", py:"děng", en:"wait"}
        ]},
        { en: "(Later) Customer: Waiter, the check please!", words: [
          {hz:"客人:", py:"kèrén", en:"customer"},
          {hz:"服务员,", py:"fúwùyuán", en:"waiter"},
          {hz:"买单!", py:"mǎidān", en:"the bill"}
        ]}
      ]
    },

    // ============ INTERMEDIATE: a letter home ============
    {
      id: "c5", level: "intermediate",
      title: { hz: "小美的信", py: "Xiǎoměi de xìn", en: "Xiaomei's Letter" },
      description: "A student writes home after three months in Beijing.",
      sentences: [
        { en: "Dear Mom and Dad:", words: [
          {hz:"亲爱的", py:"qīn'ài de", en:"dear"},
          {hz:"爸爸", py:"bàba", en:"dad"},
          {hz:"妈妈:", py:"māma", en:"mom"}
        ]},
        { en: "I've already been in Beijing for three months.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"到", py:"dào", en:"arrived at"},
          {hz:"北京", py:"Běijīng", en:"Beijing"},
          {hz:"已经", py:"yǐjīng", en:"already"},
          {hz:"三", py:"sān", en:"three"},
          {hz:"个月", py:"ge yuè", en:"months"},
          {hz:"了。", py:"le", en:"(perfective)"}
        ]},
        { en: "Life in Beijing is very different from home.", words: [
          {hz:"北京", py:"Běijīng", en:"Beijing"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"生活", py:"shēnghuó", en:"life"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"家里", py:"jiā lǐ", en:"home"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"不一样。", py:"bù yíyàng", en:"different"}
        ]},
        { en: "The winters here are much colder than in the south.", words: [
          {hz:"这里", py:"zhèlǐ", en:"here"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"冬天", py:"dōngtiān", en:"winter"},
          {hz:"比", py:"bǐ", en:"than"},
          {hz:"南方", py:"nánfāng", en:"the south"},
          {hz:"冷", py:"lěng", en:"cold"},
          {hz:"得多。", py:"de duō", en:"much more"}
        ]},
        { en: "I often wear a coat and scarf.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"常常", py:"chángcháng", en:"often"},
          {hz:"穿", py:"chuān", en:"wear"},
          {hz:"大衣", py:"dàyī", en:"coat"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"围巾。", py:"wéijīn", en:"scarf"}
        ]},
        { en: "My school is on the north side of the city.", words: [
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"学校", py:"xuéxiào", en:"school"},
          {hz:"在", py:"zài", en:"is in"},
          {hz:"城市", py:"chéngshì", en:"city"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"北边。", py:"běibiān", en:"north side"}
        ]},
        { en: "Every day I take the subway to class.", words: [
          {hz:"每天", py:"měi tiān", en:"every day"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"坐", py:"zuò", en:"take"},
          {hz:"地铁", py:"dìtiě", en:"subway"},
          {hz:"去", py:"qù", en:"to"},
          {hz:"上课。", py:"shàngkè", en:"attend class"}
        ]},
        { en: "The teachers are very dedicated and my classmates are friendly.", words: [
          {hz:"老师", py:"lǎoshī", en:"teachers"},
          {hz:"非常", py:"fēicháng", en:"very"},
          {hz:"认真,", py:"rènzhēn", en:"dedicated"},
          {hz:"同学们", py:"tóngxuémen", en:"classmates"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"友好。", py:"yǒuhǎo", en:"friendly"}
        ]},
        { en: "Last weekend, I went to the Great Wall with friends.", words: [
          {hz:"上", py:"shàng", en:"last"},
          {hz:"个", py:"ge", en:"(measure)"},
          {hz:"周末,", py:"zhōumò", en:"weekend"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"朋友", py:"péngyou", en:"friends"},
          {hz:"去", py:"qù", en:"went"},
          {hz:"了", py:"le", en:"(past)"},
          {hz:"长城。", py:"Chángchéng", en:"the Great Wall"}
        ]},
        { en: "The Great Wall is really long and magnificent.", words: [
          {hz:"长城", py:"Chángchéng", en:"the Great Wall"},
          {hz:"真", py:"zhēn", en:"really"},
          {hz:"长,", py:"cháng", en:"long"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"壮观。", py:"zhuàngguān", en:"magnificent"}
        ]},
        { en: "I took many photos — I'll show you next time I come home.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"照", py:"zhào", en:"took"},
          {hz:"了", py:"le", en:"(past)"},
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"照片,", py:"zhàopiàn", en:"photos"},
          {hz:"下次", py:"xià cì", en:"next time"},
          {hz:"回家", py:"huí jiā", en:"come home"},
          {hz:"给", py:"gěi", en:"give"},
          {hz:"你们", py:"nǐmen", en:"you"},
          {hz:"看。", py:"kàn", en:"to see"}
        ]},
        { en: "Although I sometimes miss home, I'm happy here.", words: [
          {hz:"虽然", py:"suīrán", en:"although"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"有时候", py:"yǒu shíhou", en:"sometimes"},
          {hz:"想家,", py:"xiǎng jiā", en:"miss home"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"在", py:"zài", en:"in"},
          {hz:"这里", py:"zhèlǐ", en:"here"},
          {hz:"过得", py:"guò de", en:"am getting along"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"开心。", py:"kāixīn", en:"happily"}
        ]},
        { en: "Please don't worry about me.", words: [
          {hz:"请", py:"qǐng", en:"please"},
          {hz:"你们", py:"nǐmen", en:"you (plural)"},
          {hz:"不要", py:"bú yào", en:"do not"},
          {hz:"担心", py:"dānxīn", en:"worry"},
          {hz:"我。", py:"wǒ", en:"about me"}
        ]},
        { en: "I'll come back to see you when vacation starts.", words: [
          {hz:"等", py:"děng", en:"when"},
          {hz:"放假", py:"fàngjià", en:"vacation starts"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"就", py:"jiù", en:"will"},
          {hz:"回去", py:"huíqù", en:"go back"},
          {hz:"看", py:"kàn", en:"see"},
          {hz:"你们。", py:"nǐmen", en:"you"}
        ]},
        { en: "Your daughter who loves you, Xiaomei.", words: [
          {hz:"爱", py:"ài", en:"loves"},
          {hz:"你们", py:"nǐmen", en:"you"},
          {hz:"的", py:"de", en:"(possessive)"},
          {hz:"女儿", py:"nǚ'ér", en:"daughter"},
          {hz:"小美。", py:"Xiǎoměi", en:"Xiaomei"}
        ]}
      ]
    },

    // ============ INTERMEDIATE: descriptive / cultural ============
    {
      id: "c6", level: "intermediate",
      title: { hz: "中国的四季", py: "Zhōngguó de sì jì", en: "China's Four Seasons" },
      description: "A descriptive piece on spring, summer, autumn, and winter.",
      sentences: [
        { en: "China is a very large country with four distinct seasons.", words: [
          {hz:"中国", py:"Zhōngguó", en:"China"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"一个", py:"yí ge", en:"a"},
          {hz:"很大", py:"hěn dà", en:"very large"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"国家,", py:"guójiā", en:"country"},
          {hz:"四季", py:"sì jì", en:"four seasons"},
          {hz:"分明。", py:"fēnmíng", en:"are distinct"}
        ]},
        { en: "In spring, all things come back to life.", words: [
          {hz:"春天,", py:"chūntiān", en:"spring"},
          {hz:"万物", py:"wànwù", en:"all things"},
          {hz:"复苏。", py:"fùsū", en:"revive"}
        ]},
        { en: "New leaves grow on the trees, and flowers bloom.", words: [
          {hz:"树上", py:"shù shàng", en:"on the trees"},
          {hz:"长出", py:"zhǎng chū", en:"grow out"},
          {hz:"新", py:"xīn", en:"new"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"叶子,", py:"yèzi", en:"leaves"},
          {hz:"花", py:"huā", en:"flowers"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"开", py:"kāi", en:"bloom"},
          {hz:"了。", py:"le", en:"(change)"}
        ]},
        { en: "People go to parks to walk and see the cherry blossoms.", words: [
          {hz:"人们", py:"rénmen", en:"people"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"公园", py:"gōngyuán", en:"parks"},
          {hz:"散步,", py:"sànbù", en:"to walk"},
          {hz:"看", py:"kàn", en:"see"},
          {hz:"樱花。", py:"yīnghuā", en:"cherry blossoms"}
        ]},
        { en: "Summer is hot and humid.", words: [
          {hz:"夏天", py:"xiàtiān", en:"summer"},
          {hz:"又", py:"yòu", en:"both"},
          {hz:"热", py:"rè", en:"hot"},
          {hz:"又", py:"yòu", en:"and"},
          {hz:"潮湿。", py:"cháoshī", en:"humid"}
        ]},
        { en: "Many people go to the beach to swim, or to the mountains to escape the heat.", words: [
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"人", py:"rén", en:"people"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"海边", py:"hǎibiān", en:"the beach"},
          {hz:"游泳,", py:"yóuyǒng", en:"to swim"},
          {hz:"或者", py:"huòzhě", en:"or"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"山里", py:"shān lǐ", en:"the mountains"},
          {hz:"避暑。", py:"bìshǔ", en:"escape the heat"}
        ]},
        { en: "Summer in the north is a bit shorter than in the south.", words: [
          {hz:"北方", py:"běifāng", en:"the north"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"夏天", py:"xiàtiān", en:"summer"},
          {hz:"比", py:"bǐ", en:"than"},
          {hz:"南方", py:"nánfāng", en:"the south"},
          {hz:"短", py:"duǎn", en:"shorter"},
          {hz:"一点。", py:"yìdiǎn", en:"a bit"}
        ]},
        { en: "Autumn is the most comfortable season.", words: [
          {hz:"秋天", py:"qiūtiān", en:"autumn"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"舒服", py:"shūfu", en:"comfortable"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"季节。", py:"jìjié", en:"season"}
        ]},
        { en: "The weather is neither cold nor hot; the sky is high and blue.", words: [
          {hz:"天气", py:"tiānqì", en:"weather"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"冷", py:"lěng", en:"cold"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"热,", py:"rè", en:"hot"},
          {hz:"天空", py:"tiānkōng", en:"sky"},
          {hz:"又", py:"yòu", en:"both"},
          {hz:"高", py:"gāo", en:"high"},
          {hz:"又", py:"yòu", en:"and"},
          {hz:"蓝。", py:"lán", en:"blue"}
        ]},
        { en: "Beijing's Fragrant Hills — the autumn red leaves are especially beautiful.", words: [
          {hz:"北京", py:"Běijīng", en:"Beijing"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"香山,", py:"Xiāngshān", en:"Fragrant Hills"},
          {hz:"秋天", py:"qiūtiān", en:"autumn"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"红叶", py:"hóngyè", en:"red leaves"},
          {hz:"特别", py:"tèbié", en:"especially"},
          {hz:"美。", py:"měi", en:"beautiful"}
        ]},
        { en: "In winter, it snows in the north.", words: [
          {hz:"冬天,", py:"dōngtiān", en:"winter"},
          {hz:"北方", py:"běifāng", en:"the north"},
          {hz:"会", py:"huì", en:"will"},
          {hz:"下雪。", py:"xià xuě", en:"snow"}
        ]},
        { en: "Children love building snowmen and having snowball fights.", words: [
          {hz:"孩子们", py:"háizimen", en:"children"},
          {hz:"喜欢", py:"xǐhuan", en:"love"},
          {hz:"堆", py:"duī", en:"build"},
          {hz:"雪人、", py:"xuěrén", en:"snowmen"},
          {hz:"打", py:"dǎ", en:"have"},
          {hz:"雪仗。", py:"xuězhàng", en:"snowball fights"}
        ]},
        { en: "Winter in the south rarely snows, but it's still very cold.", words: [
          {hz:"南方", py:"nánfāng", en:"the south"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"冬天", py:"dōngtiān", en:"winter"},
          {hz:"很少", py:"hěn shǎo", en:"rarely"},
          {hz:"下雪,", py:"xià xuě", en:"snows"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"冷。", py:"lěng", en:"cold"}
        ]},
        { en: "Every season has its own beauty.", words: [
          {hz:"每个", py:"měi ge", en:"every"},
          {hz:"季节", py:"jìjié", en:"season"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"有", py:"yǒu", en:"has"},
          {hz:"它", py:"tā", en:"its"},
          {hz:"自己", py:"zìjǐ", en:"own"},
          {hz:"的", py:"de", en:"(of)"},
          {hz:"美。", py:"měi", en:"beauty"}
        ]}
      ]
    }
  ];

  window.STORIES = (window.STORIES || []).concat(curated);
})();
