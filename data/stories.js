// Each story has word-segmented sentences. Each word: { hz, py, en }.
// Punctuation is appended to the preceding word's hz for natural flow.
window.STORIES = [
  // ============ NEWBIE ============
  {
    id: "n1", level: "newbie",
    title: { hz: "你好", py: "Nǐ hǎo", en: "Hello" },
    description: "A simple introduction between two people.",
    sentences: [
      { en: "Hello!", words: [{hz:"你好!", py:"nǐ hǎo", en:"hello"}] },
      { en: "I am Li Ming.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"是", py:"shì", en:"am"},
        {hz:"李明。", py:"Lǐ Míng", en:"Li Ming (name)"}
      ]},
      { en: "I am Chinese.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"是", py:"shì", en:"am"},
        {hz:"中国人。", py:"Zhōngguórén", en:"Chinese person"}
      ]},
      { en: "What is your name?", words: [
        {hz:"你", py:"nǐ", en:"you"},
        {hz:"叫", py:"jiào", en:"called"},
        {hz:"什么", py:"shénme", en:"what"},
        {hz:"名字?", py:"míngzi", en:"name"}
      ]},
      { en: "My name is Wang Xiaowen.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"叫", py:"jiào", en:"(am) called"},
        {hz:"王小文。", py:"Wáng Xiǎowén", en:"Wang Xiaowen (name)"}
      ]},
      { en: "Nice to meet you.", words: [
        {hz:"很", py:"hěn", en:"very"},
        {hz:"高兴", py:"gāoxìng", en:"happy"},
        {hz:"认识", py:"rènshi", en:"to meet/know"},
        {hz:"你。", py:"nǐ", en:"you"}
      ]}
    ]
  },
  {
    id: "n2", level: "newbie",
    title: { hz: "我的家", py: "Wǒ de jiā", en: "My Family" },
    description: "Meet a family of four.",
    sentences: [
      { en: "My family has four people.", words: [
        {hz:"我家", py:"wǒ jiā", en:"my family"},
        {hz:"有", py:"yǒu", en:"has"},
        {hz:"四", py:"sì", en:"four"},
        {hz:"个", py:"gè", en:"(measure word)"},
        {hz:"人。", py:"rén", en:"people"}
      ]},
      { en: "Dad, mom, older sister, and me.", words: [
        {hz:"爸爸、", py:"bàba", en:"dad"},
        {hz:"妈妈、", py:"māma", en:"mom"},
        {hz:"姐姐", py:"jiějie", en:"older sister"},
        {hz:"和", py:"hé", en:"and"},
        {hz:"我。", py:"wǒ", en:"me"}
      ]},
      { en: "Dad is a doctor.", words: [
        {hz:"爸爸", py:"bàba", en:"dad"},
        {hz:"是", py:"shì", en:"is"},
        {hz:"医生。", py:"yīshēng", en:"doctor"}
      ]},
      { en: "Mom is a teacher.", words: [
        {hz:"妈妈", py:"māma", en:"mom"},
        {hz:"是", py:"shì", en:"is"},
        {hz:"老师。", py:"lǎoshī", en:"teacher"}
      ]},
      { en: "Older sister is a student.", words: [
        {hz:"姐姐", py:"jiějie", en:"older sister"},
        {hz:"是", py:"shì", en:"is"},
        {hz:"学生。", py:"xuésheng", en:"student"}
      ]},
      { en: "I love my family.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"爱", py:"ài", en:"love"},
        {hz:"我的", py:"wǒ de", en:"my"},
        {hz:"家。", py:"jiā", en:"family"}
      ]}
    ]
  },
  {
    id: "n3", level: "newbie",
    title: { hz: "吃饭", py: "Chī fàn", en: "Eating" },
    description: "Talking about favorite foods.",
    sentences: [
      { en: "I am hungry.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"饿", py:"è", en:"hungry"},
        {hz:"了。", py:"le", en:"(now)"}
      ]},
      { en: "I want to eat.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"想", py:"xiǎng", en:"want"},
        {hz:"吃饭。", py:"chī fàn", en:"to eat (a meal)"}
      ]},
      { en: "I like to eat rice.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"喜欢", py:"xǐhuan", en:"like"},
        {hz:"吃", py:"chī", en:"to eat"},
        {hz:"米饭。", py:"mǐfàn", en:"rice"}
      ]},
      { en: "I also like noodles.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"也", py:"yě", en:"also"},
        {hz:"喜欢", py:"xǐhuan", en:"like"},
        {hz:"面条。", py:"miàntiáo", en:"noodles"}
      ]},
      { en: "Mom's cooking is delicious.", words: [
        {hz:"妈妈", py:"māma", en:"mom"},
        {hz:"做饭", py:"zuò fàn", en:"cook"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"好吃。", py:"hǎochī", en:"delicious"}
      ]},
      { en: "Thank you, Mom!", words: [
        {hz:"谢谢", py:"xièxie", en:"thank you"},
        {hz:"妈妈!", py:"māma", en:"mom"}
      ]}
    ]
  },
  {
    id: "n4", level: "newbie",
    title: { hz: "买东西", py: "Mǎi dōngxi", en: "Shopping" },
    description: "Buying fruit at the store.",
    sentences: [
      { en: "Today I'm going to the store.", words: [
        {hz:"今天", py:"jīntiān", en:"today"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"去", py:"qù", en:"go to"},
        {hz:"商店。", py:"shāngdiàn", en:"store"}
      ]},
      { en: "I want to buy apples.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"要", py:"yào", en:"want"},
        {hz:"买", py:"mǎi", en:"buy"},
        {hz:"苹果。", py:"píngguǒ", en:"apples"}
      ]},
      { en: "How much are the apples?", words: [
        {hz:"苹果", py:"píngguǒ", en:"apples"},
        {hz:"多少", py:"duōshao", en:"how much"},
        {hz:"钱?", py:"qián", en:"money"}
      ]},
      { en: "Five yuan per jin (500g).", words: [
        {hz:"五", py:"wǔ", en:"five"},
        {hz:"块", py:"kuài", en:"yuan"},
        {hz:"钱", py:"qián", en:"money"},
        {hz:"一", py:"yī", en:"one"},
        {hz:"斤。", py:"jīn", en:"jin (500g)"}
      ]},
      { en: "I'll buy two jin.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"买", py:"mǎi", en:"buy"},
        {hz:"两", py:"liǎng", en:"two"},
        {hz:"斤。", py:"jīn", en:"jin"}
      ]},
      { en: "Thanks, goodbye!", words: [
        {hz:"谢谢,", py:"xièxie", en:"thanks"},
        {hz:"再见!", py:"zàijiàn", en:"goodbye"}
      ]}
    ]
  },
  {
    id: "n5", level: "newbie",
    title: { hz: "学中文", py: "Xué Zhōngwén", en: "Studying Chinese" },
    description: "Why I'm learning Mandarin.",
    sentences: [
      { en: "I study Chinese.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"学", py:"xué", en:"study"},
        {hz:"中文。", py:"Zhōngwén", en:"Chinese"}
      ]},
      { en: "Chinese is very interesting.", words: [
        {hz:"中文", py:"Zhōngwén", en:"Chinese"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"有意思。", py:"yǒu yìsi", en:"interesting"}
      ]},
      { en: "My teacher is Chinese.", words: [
        {hz:"我的", py:"wǒ de", en:"my"},
        {hz:"老师", py:"lǎoshī", en:"teacher"},
        {hz:"是", py:"shì", en:"is"},
        {hz:"中国人。", py:"Zhōngguórén", en:"Chinese person"}
      ]},
      { en: "She is very nice.", words: [
        {hz:"她", py:"tā", en:"she"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"好。", py:"hǎo", en:"nice"}
      ]},
      { en: "I study every day.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"每天", py:"měitiān", en:"every day"},
        {hz:"学习。", py:"xuéxí", en:"study"}
      ]},
      { en: "I want to go to China.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"想", py:"xiǎng", en:"want to"},
        {hz:"去", py:"qù", en:"go to"},
        {hz:"中国。", py:"Zhōngguó", en:"China"}
      ]}
    ]
  },
  {
    id: "n6", level: "newbie",
    title: { hz: "今天天气", py: "Jīntiān tiānqì", en: "Today's Weather" },
    description: "A nice day in the park.",
    sentences: [
      { en: "Today's weather is very nice.", words: [
        {hz:"今天", py:"jīntiān", en:"today"},
        {hz:"天气", py:"tiānqì", en:"weather"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"好。", py:"hǎo", en:"good"}
      ]},
      { en: "The sun is strong.", words: [
        {hz:"太阳", py:"tàiyáng", en:"sun"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"大。", py:"dà", en:"big/strong"}
      ]},
      { en: "Not cold, not hot either.", words: [
        {hz:"不", py:"bù", en:"not"},
        {hz:"冷", py:"lěng", en:"cold"},
        {hz:"也", py:"yě", en:"also"},
        {hz:"不", py:"bù", en:"not"},
        {hz:"热。", py:"rè", en:"hot"}
      ]},
      { en: "I want to go to the park.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"想", py:"xiǎng", en:"want"},
        {hz:"去", py:"qù", en:"go to"},
        {hz:"公园。", py:"gōngyuán", en:"park"}
      ]},
      { en: "The park has many flowers.", words: [
        {hz:"公园", py:"gōngyuán", en:"park"},
        {hz:"有", py:"yǒu", en:"has"},
        {hz:"很多", py:"hěnduō", en:"many"},
        {hz:"花。", py:"huā", en:"flowers"}
      ]},
      { en: "So pretty!", words: [
        {hz:"真", py:"zhēn", en:"really"},
        {hz:"漂亮!", py:"piàoliang", en:"pretty"}
      ]}
    ]
  },

  // ============ BEGINNER ============
  {
    id: "b1", level: "beginner",
    title: { hz: "我的周末", py: "Wǒ de zhōumò", en: "My Weekend" },
    description: "How I spend Saturday and Sunday.",
    sentences: [
      { en: "On weekends I often go out with friends.", words: [
        {hz:"周末", py:"zhōumò", en:"weekend"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"常常", py:"chángcháng", en:"often"},
        {hz:"和", py:"hé", en:"with"},
        {hz:"朋友", py:"péngyou", en:"friends"},
        {hz:"一起", py:"yìqǐ", en:"together"},
        {hz:"出去。", py:"chūqù", en:"go out"}
      ]},
      { en: "Saturday morning we go running.", words: [
        {hz:"星期六", py:"xīngqīliù", en:"Saturday"},
        {hz:"早上", py:"zǎoshang", en:"morning"},
        {hz:"我们", py:"wǒmen", en:"we"},
        {hz:"去", py:"qù", en:"go"},
        {hz:"跑步。", py:"pǎobù", en:"running"}
      ]},
      { en: "In the afternoon we eat lunch together.", words: [
        {hz:"下午", py:"xiàwǔ", en:"afternoon"},
        {hz:"我们", py:"wǒmen", en:"we"},
        {hz:"一起", py:"yìqǐ", en:"together"},
        {hz:"吃", py:"chī", en:"eat"},
        {hz:"午饭。", py:"wǔfàn", en:"lunch"}
      ]},
      { en: "In the evening I watch movies at home.", words: [
        {hz:"晚上", py:"wǎnshang", en:"evening"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"在家", py:"zài jiā", en:"at home"},
        {hz:"看", py:"kàn", en:"watch"},
        {hz:"电影。", py:"diànyǐng", en:"movies"}
      ]},
      { en: "On Sunday I sleep in late.", words: [
        {hz:"星期天", py:"xīngqītiān", en:"Sunday"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"睡", py:"shuì", en:"sleep"},
        {hz:"得", py:"de", en:"(particle)"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"晚。", py:"wǎn", en:"late"}
      ]},
      { en: "Then I do homework.", words: [
        {hz:"然后", py:"ránhòu", en:"then"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"做", py:"zuò", en:"do"},
        {hz:"作业。", py:"zuòyè", en:"homework"}
      ]},
      { en: "My weekend is very happy.", words: [
        {hz:"我的", py:"wǒ de", en:"my"},
        {hz:"周末", py:"zhōumò", en:"weekend"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"开心。", py:"kāixīn", en:"happy"}
      ]}
    ]
  },
  {
    id: "b2", level: "beginner",
    title: { hz: "去北京", py: "Qù Běijīng", en: "Going to Beijing" },
    description: "Planning a trip to the capital.",
    sentences: [
      { en: "Next month I'm going to travel to Beijing.", words: [
        {hz:"下个月", py:"xià gè yuè", en:"next month"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"要", py:"yào", en:"going to"},
        {hz:"去", py:"qù", en:"go to"},
        {hz:"北京", py:"Běijīng", en:"Beijing"},
        {hz:"旅游。", py:"lǚyóu", en:"travel"}
      ]},
      { en: "I want to see the Great Wall.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"想", py:"xiǎng", en:"want to"},
        {hz:"看", py:"kàn", en:"see"},
        {hz:"长城。", py:"Chángchéng", en:"Great Wall"}
      ]},
      { en: "I also want to eat Beijing roast duck.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"还", py:"hái", en:"also"},
        {hz:"想", py:"xiǎng", en:"want to"},
        {hz:"吃", py:"chī", en:"eat"},
        {hz:"北京烤鸭。", py:"Běijīng kǎoyā", en:"Beijing roast duck"}
      ]},
      { en: "My friend lives in Beijing.", words: [
        {hz:"我的", py:"wǒ de", en:"my"},
        {hz:"朋友", py:"péngyou", en:"friend"},
        {hz:"住", py:"zhù", en:"lives"},
        {hz:"在", py:"zài", en:"in"},
        {hz:"北京。", py:"Běijīng", en:"Beijing"}
      ]},
      { en: "He will take me to many places.", words: [
        {hz:"他", py:"tā", en:"he"},
        {hz:"会", py:"huì", en:"will"},
        {hz:"带", py:"dài", en:"take"},
        {hz:"我", py:"wǒ", en:"me"},
        {hz:"去", py:"qù", en:"to"},
        {hz:"很多", py:"hěnduō", en:"many"},
        {hz:"地方。", py:"dìfang", en:"places"}
      ]},
      { en: "I have already bought my plane ticket.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"已经", py:"yǐjīng", en:"already"},
        {hz:"买好", py:"mǎi hǎo", en:"bought"},
        {hz:"机票", py:"jīpiào", en:"plane ticket"},
        {hz:"了。", py:"le", en:"(perfective)"}
      ]},
      { en: "I'm really looking forward to it!", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"期待!", py:"qīdài", en:"look forward to"}
      ]}
    ]
  },
  {
    id: "b3", level: "beginner",
    title: { hz: "在咖啡店", py: "Zài kāfēidiàn", en: "At the Coffee Shop" },
    description: "A morning routine.",
    sentences: [
      { en: "Every morning I go to the coffee shop.", words: [
        {hz:"每天", py:"měitiān", en:"every day"},
        {hz:"早上", py:"zǎoshang", en:"morning"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"都", py:"dōu", en:"always"},
        {hz:"去", py:"qù", en:"go to"},
        {hz:"咖啡店。", py:"kāfēidiàn", en:"coffee shop"}
      ]},
      { en: "The coffee there is very good.", words: [
        {hz:"那里", py:"nàlǐ", en:"there"},
        {hz:"的", py:"de", en:"'s"},
        {hz:"咖啡", py:"kāfēi", en:"coffee"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"好喝。", py:"hǎohē", en:"tasty (drink)"}
      ]},
      { en: "I often order a latte.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"常常", py:"chángcháng", en:"often"},
        {hz:"点", py:"diǎn", en:"order"},
        {hz:"一", py:"yī", en:"one"},
        {hz:"杯", py:"bēi", en:"cup"},
        {hz:"拿铁。", py:"nátiě", en:"latte"}
      ]},
      { en: "The waiter knows me now.", words: [
        {hz:"服务员", py:"fúwùyuán", en:"waiter"},
        {hz:"认识", py:"rènshi", en:"know/recognize"},
        {hz:"我", py:"wǒ", en:"me"},
        {hz:"了。", py:"le", en:"(now)"}
      ]},
      { en: "I like to sit by the window and read.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"喜欢", py:"xǐhuan", en:"like"},
        {hz:"坐", py:"zuò", en:"sit"},
        {hz:"在", py:"zài", en:"at"},
        {hz:"窗边", py:"chuāngbiān", en:"window side"},
        {hz:"看书。", py:"kàn shū", en:"read"}
      ]},
      { en: "Inside the coffee shop it's very quiet.", words: [
        {hz:"咖啡店", py:"kāfēidiàn", en:"coffee shop"},
        {hz:"里", py:"lǐ", en:"inside"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"安静。", py:"ānjìng", en:"quiet"}
      ]},
      { en: "This is my favorite place.", words: [
        {hz:"这", py:"zhè", en:"this"},
        {hz:"是", py:"shì", en:"is"},
        {hz:"我", py:"wǒ", en:"my"},
        {hz:"最", py:"zuì", en:"most"},
        {hz:"喜欢", py:"xǐhuan", en:"like"},
        {hz:"的", py:"de", en:"(particle)"},
        {hz:"地方。", py:"dìfang", en:"place"}
      ]}
    ]
  },
  {
    id: "b4", level: "beginner",
    title: { hz: "我的朋友小明", py: "Wǒ de péngyou Xiǎomíng", en: "My Friend Xiaoming" },
    description: "About my best friend since childhood.",
    sentences: [
      { en: "Xiaoming is my best friend.", words: [
        {hz:"小明", py:"Xiǎomíng", en:"Xiaoming (name)"},
        {hz:"是", py:"shì", en:"is"},
        {hz:"我", py:"wǒ", en:"my"},
        {hz:"最", py:"zuì", en:"most"},
        {hz:"好的", py:"hǎo de", en:"good"},
        {hz:"朋友。", py:"péngyou", en:"friend"}
      ]},
      { en: "We grew up together.", words: [
        {hz:"我们", py:"wǒmen", en:"we"},
        {hz:"一起", py:"yìqǐ", en:"together"},
        {hz:"长大", py:"zhǎngdà", en:"grew up"},
        {hz:"的。", py:"de", en:"(particle)"}
      ]},
      { en: "He is a bit taller than me.", words: [
        {hz:"他", py:"tā", en:"he"},
        {hz:"比", py:"bǐ", en:"than"},
        {hz:"我", py:"wǒ", en:"me"},
        {hz:"高", py:"gāo", en:"tall"},
        {hz:"一点。", py:"yìdiǎn", en:"a little"}
      ]},
      { en: "He's very smart and funny.", words: [
        {hz:"他", py:"tā", en:"he"},
        {hz:"非常", py:"fēicháng", en:"very"},
        {hz:"聪明", py:"cōngmíng", en:"smart"},
        {hz:"也", py:"yě", en:"also"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"幽默。", py:"yōumò", en:"funny"}
      ]},
      { en: "We meet every week.", words: [
        {hz:"我们", py:"wǒmen", en:"we"},
        {hz:"每个", py:"měi gè", en:"every"},
        {hz:"星期", py:"xīngqī", en:"week"},
        {hz:"都", py:"dōu", en:"all"},
        {hz:"见面。", py:"jiànmiàn", en:"meet"}
      ]},
      { en: "We play basketball and watch movies together.", words: [
        {hz:"我们", py:"wǒmen", en:"we"},
        {hz:"一起", py:"yìqǐ", en:"together"},
        {hz:"打篮球、", py:"dǎ lánqiú", en:"play basketball"},
        {hz:"看", py:"kàn", en:"watch"},
        {hz:"电影。", py:"diànyǐng", en:"movies"}
      ]},
      { en: "I'm lucky to have a friend like this.", words: [
        {hz:"有", py:"yǒu", en:"to have"},
        {hz:"这样", py:"zhèyàng", en:"such"},
        {hz:"的", py:"de", en:"(particle)"},
        {hz:"朋友", py:"péngyou", en:"friend"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"很", py:"hěn", en:"very"},
        {hz:"幸运。", py:"xìngyùn", en:"lucky"}
      ]}
    ]
  },
  {
    id: "b5", level: "beginner",
    title: { hz: "生日快乐", py: "Shēngrì kuàilè", en: "Happy Birthday" },
    description: "Celebrating my little sister's tenth birthday.",
    sentences: [
      { en: "Today is my younger sister's birthday.", words: [
        {hz:"今天", py:"jīntiān", en:"today"},
        {hz:"是", py:"shì", en:"is"},
        {hz:"我", py:"wǒ", en:"my"},
        {hz:"妹妹", py:"mèimei", en:"younger sister"},
        {hz:"的", py:"de", en:"'s"},
        {hz:"生日。", py:"shēngrì", en:"birthday"}
      ]},
      { en: "She is ten years old this year.", words: [
        {hz:"她", py:"tā", en:"she"},
        {hz:"今年", py:"jīnnián", en:"this year"},
        {hz:"十", py:"shí", en:"ten"},
        {hz:"岁", py:"suì", en:"years old"},
        {hz:"了。", py:"le", en:"(now)"}
      ]},
      { en: "Mom made a big cake.", words: [
        {hz:"妈妈", py:"māma", en:"mom"},
        {hz:"做", py:"zuò", en:"made"},
        {hz:"了", py:"le", en:"(perfective)"},
        {hz:"一", py:"yī", en:"one"},
        {hz:"个", py:"gè", en:"(measure)"},
        {hz:"大", py:"dà", en:"big"},
        {hz:"蛋糕。", py:"dàngāo", en:"cake"}
      ]},
      { en: "Dad bought many gifts.", words: [
        {hz:"爸爸", py:"bàba", en:"dad"},
        {hz:"买", py:"mǎi", en:"bought"},
        {hz:"了", py:"le", en:"(perfective)"},
        {hz:"很多", py:"hěnduō", en:"many"},
        {hz:"礼物。", py:"lǐwù", en:"gifts"}
      ]},
      { en: "We sang the birthday song together.", words: [
        {hz:"我们", py:"wǒmen", en:"we"},
        {hz:"一起", py:"yìqǐ", en:"together"},
        {hz:"唱", py:"chàng", en:"sang"},
        {hz:"生日歌。", py:"shēngrì gē", en:"birthday song"}
      ]},
      { en: "My sister was very happy.", words: [
        {hz:"妹妹", py:"mèimei", en:"sister"},
        {hz:"非常", py:"fēicháng", en:"very"},
        {hz:"开心。", py:"kāixīn", en:"happy"}
      ]},
      { en: "She made a wish.", words: [
        {hz:"她", py:"tā", en:"she"},
        {hz:"许", py:"xǔ", en:"made"},
        {hz:"了", py:"le", en:"(perfective)"},
        {hz:"一", py:"yī", en:"one"},
        {hz:"个", py:"gè", en:"(measure)"},
        {hz:"愿望。", py:"yuànwàng", en:"wish"}
      ]}
    ]
  },
  {
    id: "b6", level: "beginner",
    title: { hz: "坐地铁", py: "Zuò dìtiě", en: "Taking the Subway" },
    description: "My daily commute.",
    sentences: [
      { en: "I take the subway to work every day.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"每天", py:"měitiān", en:"every day"},
        {hz:"坐", py:"zuò", en:"ride"},
        {hz:"地铁", py:"dìtiě", en:"subway"},
        {hz:"上班。", py:"shàng bān", en:"to work"}
      ]},
      { en: "The subway is both fast and cheap.", words: [
        {hz:"地铁", py:"dìtiě", en:"subway"},
        {hz:"又", py:"yòu", en:"both"},
        {hz:"快", py:"kuài", en:"fast"},
        {hz:"又", py:"yòu", en:"and"},
        {hz:"便宜。", py:"piányi", en:"cheap"}
      ]},
      { en: "In the morning there are a lot of people.", words: [
        {hz:"早上", py:"zǎoshang", en:"morning"},
        {hz:"人", py:"rén", en:"people"},
        {hz:"非常", py:"fēicháng", en:"extremely"},
        {hz:"多。", py:"duō", en:"many"}
      ]},
      { en: "Sometimes I can't find a seat.", words: [
        {hz:"有时候", py:"yǒushíhou", en:"sometimes"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"找不到", py:"zhǎo bu dào", en:"can't find"},
        {hz:"座位。", py:"zuòwèi", en:"seat"}
      ]},
      { en: "I have to ride for five stops.", words: [
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"要", py:"yào", en:"need to"},
        {hz:"坐", py:"zuò", en:"ride"},
        {hz:"五", py:"wǔ", en:"five"},
        {hz:"站。", py:"zhàn", en:"stops"}
      ]},
      { en: "After getting off I walk to the company.", words: [
        {hz:"下车", py:"xià chē", en:"get off"},
        {hz:"以后", py:"yǐhòu", en:"after"},
        {hz:"我", py:"wǒ", en:"I"},
        {hz:"走路", py:"zǒu lù", en:"walk"},
        {hz:"去", py:"qù", en:"to"},
        {hz:"公司。", py:"gōngsī", en:"company"}
      ]},
      { en: "In total it takes thirty minutes.", words: [
        {hz:"一共", py:"yígòng", en:"in total"},
        {hz:"要", py:"yào", en:"takes"},
        {hz:"三十", py:"sānshí", en:"thirty"},
        {hz:"分钟。", py:"fēnzhōng", en:"minutes"}
      ]}
    ]
  }
];
