// Additional stories: 4 newbie, 4 beginner, 10 intermediate.
// Appended to window.STORIES defined in stories.js.
(function () {
  const extra = [
    // ============ NEWBIE (continued) ============
    {
      id: "n7", level: "newbie",
      title: { hz: "我的老师", py: "Wǒ de lǎoshī", en: "My Teacher" },
      description: "A short description of my English teacher.",
      sentences: [
        { en: "My teacher's surname is Wang.", words: [
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"老师", py:"lǎoshī", en:"teacher"},
          {hz:"姓", py:"xìng", en:"surname"},
          {hz:"王。", py:"Wáng", en:"Wang"}
        ]},
        { en: "She is very young.", words: [
          {hz:"她", py:"tā", en:"she"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"年轻。", py:"niánqīng", en:"young"}
        ]},
        { en: "She teaches us English.", words: [
          {hz:"她", py:"tā", en:"she"},
          {hz:"教", py:"jiāo", en:"teaches"},
          {hz:"我们", py:"wǒmen", en:"us"},
          {hz:"英文。", py:"Yīngwén", en:"English"}
        ]},
        { en: "Her class is very interesting.", words: [
          {hz:"她的", py:"tā de", en:"her"},
          {hz:"课", py:"kè", en:"class"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"有意思。", py:"yǒu yìsi", en:"interesting"}
        ]},
        { en: "We all like her very much.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"她。", py:"tā", en:"her"}
        ]},
        { en: "She often smiles.", words: [
          {hz:"她", py:"tā", en:"she"},
          {hz:"常常", py:"chángcháng", en:"often"},
          {hz:"笑。", py:"xiào", en:"smiles"}
        ]}
      ]
    },
    {
      id: "n8", level: "newbie",
      title: { hz: "喝茶", py: "Hē chá", en: "Drinking Tea" },
      description: "A daily tea habit at home.",
      sentences: [
        { en: "Chinese people like drinking tea.", words: [
          {hz:"中国人", py:"Zhōngguórén", en:"Chinese people"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"喝", py:"hē", en:"drink"},
          {hz:"茶。", py:"chá", en:"tea"}
        ]},
        { en: "I like it too.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"喜欢。", py:"xǐhuan", en:"like"}
        ]},
        { en: "Grandpa drinks tea every morning.", words: [
          {hz:"爷爷", py:"yéye", en:"grandpa"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"早上", py:"zǎoshang", en:"morning"},
          {hz:"喝", py:"hē", en:"drink"},
          {hz:"茶。", py:"chá", en:"tea"}
        ]},
        { en: "He says tea is good for the body.", words: [
          {hz:"他", py:"tā", en:"he"},
          {hz:"说", py:"shuō", en:"says"},
          {hz:"茶", py:"chá", en:"tea"},
          {hz:"对", py:"duì", en:"toward"},
          {hz:"身体", py:"shēntǐ", en:"body"},
          {hz:"好。", py:"hǎo", en:"good"}
        ]},
        { en: "I like green tea the most.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"绿茶。", py:"lǜchá", en:"green tea"}
        ]},
        { en: "Drinking tea makes me feel relaxed.", words: [
          {hz:"喝茶", py:"hē chá", en:"drinking tea"},
          {hz:"让", py:"ràng", en:"makes"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"觉得", py:"juéde", en:"feel"},
          {hz:"放松。", py:"fàngsōng", en:"relaxed"}
        ]}
      ]
    },
    {
      id: "n9", level: "newbie",
      title: { hz: "我爱音乐", py: "Wǒ ài yīnyuè", en: "I Love Music" },
      description: "Listening to songs and playing guitar.",
      sentences: [
        { en: "I love music very much.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"爱", py:"ài", en:"love"},
          {hz:"音乐。", py:"yīnyuè", en:"music"}
        ]},
        { en: "I listen to songs every day.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"都", py:"dōu", en:"always"},
          {hz:"听", py:"tīng", en:"listen to"},
          {hz:"歌。", py:"gē", en:"songs"}
        ]},
        { en: "I like Chinese songs.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"中文", py:"Zhōngwén", en:"Chinese"},
          {hz:"歌。", py:"gē", en:"songs"}
        ]},
        { en: "I also like English songs.", words: [
          {hz:"也", py:"yě", en:"also"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"英文", py:"Yīngwén", en:"English"},
          {hz:"歌。", py:"gē", en:"songs"}
        ]},
        { en: "I can play guitar.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"会", py:"huì", en:"can"},
          {hz:"弹", py:"tán", en:"play"},
          {hz:"吉他。", py:"jítā", en:"guitar"}
        ]},
        { en: "Music makes me happy.", words: [
          {hz:"音乐", py:"yīnyuè", en:"music"},
          {hz:"让", py:"ràng", en:"makes"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"开心。", py:"kāixīn", en:"happy"}
        ]}
      ]
    },
    {
      id: "n10", level: "newbie",
      title: { hz: "小狗豆豆", py: "Xiǎogǒu Dòudou", en: "My Puppy Doudou" },
      description: "A cute puppy at home.",
      sentences: [
        { en: "I have a little dog.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"有", py:"yǒu", en:"have"},
          {hz:"一", py:"yì", en:"one"},
          {hz:"只", py:"zhī", en:"(measure)"},
          {hz:"小狗。", py:"xiǎogǒu", en:"little dog"}
        ]},
        { en: "It is called Doudou.", words: [
          {hz:"它", py:"tā", en:"it"},
          {hz:"叫", py:"jiào", en:"is called"},
          {hz:"豆豆。", py:"Dòudou", en:"Doudou"}
        ]},
        { en: "It is very cute.", words: [
          {hz:"它", py:"tā", en:"it"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"可爱。", py:"kě'ài", en:"cute"}
        ]},
        { en: "It loves to run.", words: [
          {hz:"它", py:"tā", en:"it"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"喜欢", py:"xǐhuan", en:"likes"},
          {hz:"跑。", py:"pǎo", en:"to run"}
        ]},
        { en: "Every afternoon I take it out.", words: [
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"下午", py:"xiàwǔ", en:"afternoon"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"带", py:"dài", en:"take"},
          {hz:"它", py:"tā", en:"it"},
          {hz:"出去。", py:"chūqù", en:"out"}
        ]},
        { en: "Doudou is my best friend.", words: [
          {hz:"豆豆", py:"Dòudou", en:"Doudou"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"好的", py:"hǎo de", en:"good"},
          {hz:"朋友。", py:"péngyou", en:"friend"}
        ]}
      ]
    },

    // ============ BEGINNER (continued) ============
    {
      id: "b7", level: "beginner",
      title: { hz: "我的房间", py: "Wǒ de fángjiān", en: "My Room" },
      description: "A tour of my cozy bedroom.",
      sentences: [
        { en: "My room is not big, but it is comfortable.", words: [
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"房间", py:"fángjiān", en:"room"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"大,", py:"dà", en:"big"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"舒服。", py:"shūfu", en:"comfortable"}
        ]},
        { en: "The bed is next to the window.", words: [
          {hz:"床", py:"chuáng", en:"bed"},
          {hz:"在", py:"zài", en:"at"},
          {hz:"窗户", py:"chuānghu", en:"window"},
          {hz:"旁边。", py:"pángbiān", en:"next to"}
        ]},
        { en: "The morning sunlight is lovely.", words: [
          {hz:"早上", py:"zǎoshang", en:"morning"},
          {hz:"阳光", py:"yángguāng", en:"sunlight"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"好。", py:"hǎo", en:"nice"}
        ]},
        { en: "There is a computer on the desk.", words: [
          {hz:"书桌", py:"shūzhuō", en:"desk"},
          {hz:"上", py:"shàng", en:"on"},
          {hz:"有", py:"yǒu", en:"there is"},
          {hz:"一", py:"yì", en:"one"},
          {hz:"台", py:"tái", en:"(measure)"},
          {hz:"电脑。", py:"diànnǎo", en:"computer"}
        ]},
        { en: "I often do homework here.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"常常", py:"chángcháng", en:"often"},
          {hz:"在", py:"zài", en:"at"},
          {hz:"这里", py:"zhèlǐ", en:"here"},
          {hz:"做", py:"zuò", en:"do"},
          {hz:"作业。", py:"zuòyè", en:"homework"}
        ]},
        { en: "There are a few photos on the wall.", words: [
          {hz:"墙上", py:"qiáng shàng", en:"on the wall"},
          {hz:"有", py:"yǒu", en:"there are"},
          {hz:"几", py:"jǐ", en:"a few"},
          {hz:"张", py:"zhāng", en:"(measure)"},
          {hz:"照片。", py:"zhàopiàn", en:"photos"}
        ]},
        { en: "They're all my family and friends.", words: [
          {hz:"都是", py:"dōu shì", en:"all are"},
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"家人", py:"jiārén", en:"family"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"朋友。", py:"péngyou", en:"friends"}
        ]},
        { en: "I really like my room.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"很", py:"hěn", en:"really"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"房间。", py:"fángjiān", en:"room"}
        ]}
      ]
    },
    {
      id: "b8", level: "beginner",
      title: { hz: "学做饭", py: "Xué zuò fàn", en: "Learning to Cook" },
      description: "Swapping takeout for home cooking.",
      sentences: [
        { en: "Recently I started learning to cook.", words: [
          {hz:"最近", py:"zuìjìn", en:"recently"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"开始", py:"kāishǐ", en:"started"},
          {hz:"学", py:"xué", en:"to learn"},
          {hz:"做饭。", py:"zuò fàn", en:"to cook"}
        ]},
        { en: "Before, I always ordered takeout.", words: [
          {hz:"以前", py:"yǐqián", en:"before"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"总是", py:"zǒngshì", en:"always"},
          {hz:"点", py:"diǎn", en:"order"},
          {hz:"外卖。", py:"wàimài", en:"takeout"}
        ]},
        { en: "Mom says cooking for yourself is healthier.", words: [
          {hz:"妈妈", py:"māma", en:"mom"},
          {hz:"说", py:"shuō", en:"says"},
          {hz:"自己", py:"zìjǐ", en:"yourself"},
          {hz:"做饭", py:"zuò fàn", en:"to cook"},
          {hz:"更", py:"gèng", en:"more"},
          {hz:"健康。", py:"jiànkāng", en:"healthy"}
        ]},
        { en: "The first thing I made was tomato and egg.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"第一次", py:"dì yī cì", en:"first time"},
          {hz:"做的", py:"zuò de", en:"made"},
          {hz:"是", py:"shì", en:"was"},
          {hz:"西红柿", py:"xīhóngshì", en:"tomato"},
          {hz:"鸡蛋。", py:"jīdàn", en:"egg"}
        ]},
        { en: "At first I didn't do it well.", words: [
          {hz:"开始", py:"kāishǐ", en:"beginning"},
          {hz:"的时候", py:"de shíhou", en:"when"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"做得", py:"zuò de", en:"did (it)"},
          {hz:"不好。", py:"bù hǎo", en:"not well"}
        ]},
        { en: "But Mom helped me.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"妈妈", py:"māma", en:"mom"},
          {hz:"帮", py:"bāng", en:"help"},
          {hz:"我。", py:"wǒ", en:"me"}
        ]},
        { en: "Now I can make a few dishes.", words: [
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"可以", py:"kěyǐ", en:"can"},
          {hz:"做", py:"zuò", en:"make"},
          {hz:"几个", py:"jǐ gè", en:"several"},
          {hz:"菜", py:"cài", en:"dishes"},
          {hz:"了。", py:"le", en:"(now)"}
        ]},
        { en: "Cooking is actually quite interesting.", words: [
          {hz:"做饭", py:"zuò fàn", en:"cooking"},
          {hz:"其实", py:"qíshí", en:"actually"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"有意思。", py:"yǒu yìsi", en:"interesting"}
        ]}
      ]
    },
    {
      id: "b9", level: "beginner",
      title: { hz: "第一次下雪", py: "Dì yī cì xià xuě", en: "First Snow" },
      description: "A southerner sees snow for the first time.",
      sentences: [
        { en: "I'm from the south, I had never seen snow.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"是", py:"shì", en:"am"},
          {hz:"南方人,", py:"nánfāngrén", en:"southerner"},
          {hz:"没", py:"méi", en:"have not"},
          {hz:"见过", py:"jiàn guo", en:"seen"},
          {hz:"雪。", py:"xuě", en:"snow"}
        ]},
        { en: "Last winter I went to the north.", words: [
          {hz:"去年", py:"qùnián", en:"last year"},
          {hz:"冬天", py:"dōngtiān", en:"winter"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"去", py:"qù", en:"went"},
          {hz:"了", py:"le", en:"(perfective)"},
          {hz:"北方。", py:"běifāng", en:"the north"}
        ]},
        { en: "That was the first time I saw snow.", words: [
          {hz:"那", py:"nà", en:"that"},
          {hz:"是", py:"shì", en:"was"},
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"第一次", py:"dì yī cì", en:"first time"},
          {hz:"看见", py:"kànjiàn", en:"seeing"},
          {hz:"雪。", py:"xuě", en:"snow"}
        ]},
        { en: "The snow was white and soft.", words: [
          {hz:"雪", py:"xuě", en:"the snow"},
          {hz:"又", py:"yòu", en:"both"},
          {hz:"白", py:"bái", en:"white"},
          {hz:"又", py:"yòu", en:"and"},
          {hz:"软。", py:"ruǎn", en:"soft"}
        ]},
        { en: "It was extremely cold outside.", words: [
          {hz:"外面", py:"wàimiàn", en:"outside"},
          {hz:"非常", py:"fēicháng", en:"extremely"},
          {hz:"冷。", py:"lěng", en:"cold"}
        ]},
        { en: "But I was still excited.", words: [
          {hz:"可是", py:"kěshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"还是", py:"háishi", en:"still"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"兴奋。", py:"xīngfèn", en:"excited"}
        ]},
        { en: "My friend and I had a snowball fight.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"朋友", py:"péngyou", en:"friend"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"打雪仗。", py:"dǎ xuězhàng", en:"had a snowball fight"}
        ]},
        { en: "I will never forget that day.", words: [
          {hz:"那", py:"nà", en:"that"},
          {hz:"一天", py:"yì tiān", en:"day"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"永远", py:"yǒngyuǎn", en:"forever"},
          {hz:"不会", py:"bú huì", en:"will not"},
          {hz:"忘。", py:"wàng", en:"forget"}
        ]}
      ]
    },
    {
      id: "b10", level: "beginner",
      title: { hz: "新的工作", py: "Xīn de gōngzuò", en: "New Job" },
      description: "A little nervous about my first job.",
      sentences: [
        { en: "Next week I start a new job.", words: [
          {hz:"下", py:"xià", en:"next"},
          {hz:"个", py:"gè", en:"(measure)"},
          {hz:"星期", py:"xīngqī", en:"week"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"开始", py:"kāishǐ", en:"start"},
          {hz:"新", py:"xīn", en:"new"},
          {hz:"工作。", py:"gōngzuò", en:"job"}
        ]},
        { en: "The company is in the city center.", words: [
          {hz:"这", py:"zhè", en:"this"},
          {hz:"家", py:"jiā", en:"(measure)"},
          {hz:"公司", py:"gōngsī", en:"company"},
          {hz:"在", py:"zài", en:"at"},
          {hz:"市中心。", py:"shì zhōngxīn", en:"city center"}
        ]},
        { en: "I have to take the bus to work.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"要", py:"yào", en:"have to"},
          {hz:"坐", py:"zuò", en:"take"},
          {hz:"公交车", py:"gōngjiāochē", en:"bus"},
          {hz:"去", py:"qù", en:"to"},
          {hz:"上班。", py:"shàngbān", en:"go to work"}
        ]},
        { en: "I'm a little nervous.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"有一点", py:"yǒu yìdiǎn", en:"a little"},
          {hz:"紧张。", py:"jǐnzhāng", en:"nervous"}
        ]},
        { en: "Because this is my first job.", words: [
          {hz:"因为", py:"yīnwèi", en:"because"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"第一次", py:"dì yī cì", en:"first time"},
          {hz:"工作。", py:"gōngzuò", en:"working"}
        ]},
        { en: "But I'm also excited.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"期待。", py:"qīdài", en:"excited/look forward"}
        ]},
        { en: "My coworkers should all be nice.", words: [
          {hz:"同事们", py:"tóngshìmen", en:"coworkers"},
          {hz:"应该", py:"yīnggāi", en:"should"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"好。", py:"hǎo", en:"nice"}
        ]},
        { en: "I hope everything goes smoothly.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"希望", py:"xīwàng", en:"hope"},
          {hz:"一切", py:"yíqiè", en:"everything"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"顺利。", py:"shùnlì", en:"smooth"}
        ]}
      ]
    },

    // ============ INTERMEDIATE ============
    {
      id: "i1", level: "intermediate",
      title: { hz: "一次难忘的旅行", py: "Yí cì nánwàng de lǚxíng", en: "An Unforgettable Trip" },
      description: "A family trip to Yunnan.",
      sentences: [
        { en: "Last summer my family and I went to Yunnan.", words: [
          {hz:"去年", py:"qùnián", en:"last year"},
          {hz:"夏天", py:"xiàtiān", en:"summer"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"家人", py:"jiārén", en:"family"},
          {hz:"去了", py:"qù le", en:"went to"},
          {hz:"云南。", py:"Yúnnán", en:"Yunnan"}
        ]},
        { en: "Yunnan's scenery is especially beautiful.", words: [
          {hz:"云南", py:"Yúnnán", en:"Yunnan"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"风景", py:"fēngjǐng", en:"scenery"},
          {hz:"特别", py:"tèbié", en:"especially"},
          {hz:"美丽。", py:"měilì", en:"beautiful"}
        ]},
        { en: "We climbed a very tall mountain.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"爬", py:"pá", en:"climbed"},
          {hz:"了", py:"le", en:"(perfective)"},
          {hz:"一", py:"yí", en:"one"},
          {hz:"座", py:"zuò", en:"(measure)"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"高", py:"gāo", en:"tall"},
          {hz:"的", py:"de", en:"(particle)"},
          {hz:"山。", py:"shān", en:"mountain"}
        ]},
        { en: "Looking down, everything was like a painting.", words: [
          {hz:"从", py:"cóng", en:"from"},
          {hz:"山上", py:"shān shàng", en:"the mountain"},
          {hz:"看下去,", py:"kàn xiàqù", en:"looking down"},
          {hz:"一切", py:"yíqiè", en:"everything"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"像", py:"xiàng", en:"like"},
          {hz:"一幅", py:"yì fú", en:"one (measure)"},
          {hz:"画。", py:"huà", en:"painting"}
        ]},
        { en: "In the evening we stayed in a small village.", words: [
          {hz:"晚上", py:"wǎnshang", en:"evening"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"住", py:"zhù", en:"stayed"},
          {hz:"在", py:"zài", en:"in"},
          {hz:"一", py:"yí", en:"a"},
          {hz:"个", py:"gè", en:"(measure)"},
          {hz:"小", py:"xiǎo", en:"small"},
          {hz:"村子", py:"cūnzi", en:"village"},
          {hz:"里。", py:"lǐ", en:"inside"}
        ]},
        { en: "The locals were very warm-hearted.", words: [
          {hz:"当地人", py:"dāngdì rén", en:"locals"},
          {hz:"非常", py:"fēicháng", en:"extremely"},
          {hz:"热情。", py:"rèqíng", en:"warm-hearted"}
        ]},
        { en: "They treated us to many local dishes.", words: [
          {hz:"他们", py:"tāmen", en:"they"},
          {hz:"请", py:"qǐng", en:"invited"},
          {hz:"我们", py:"wǒmen", en:"us"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"了", py:"le", en:"(perfective)"},
          {hz:"很多", py:"hěnduō", en:"many"},
          {hz:"本地菜。", py:"běndì cài", en:"local dishes"}
        ]},
        { en: "It was the first time I tried those dishes.", words: [
          {hz:"那", py:"nà", en:"that"},
          {hz:"是", py:"shì", en:"was"},
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"第一次", py:"dì yī cì", en:"first time"},
          {hz:"尝试", py:"chángshì", en:"trying"},
          {hz:"这些", py:"zhèxiē", en:"these"},
          {hz:"菜。", py:"cài", en:"dishes"}
        ]},
        { en: "This trip taught me many things.", words: [
          {hz:"这", py:"zhè", en:"this"},
          {hz:"次", py:"cì", en:"(measure)"},
          {hz:"旅行", py:"lǚxíng", en:"trip"},
          {hz:"让", py:"ràng", en:"let"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"学到", py:"xué dào", en:"learn"},
          {hz:"了", py:"le", en:"(perfective)"},
          {hz:"很多", py:"hěnduō", en:"many"},
          {hz:"东西。", py:"dōngxi", en:"things"}
        ]},
        { en: "I will never forget it.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"永远", py:"yǒngyuǎn", en:"forever"},
          {hz:"不会", py:"bú huì", en:"will not"},
          {hz:"忘记", py:"wàngjì", en:"forget"},
          {hz:"它。", py:"tā", en:"it"}
        ]}
      ]
    },
    {
      id: "i2", level: "intermediate",
      title: { hz: "春节回家", py: "Chūnjié huí jiā", en: "Going Home for Spring Festival" },
      description: "The most important festival of the year.",
      sentences: [
        { en: "Every Spring Festival I go back to my hometown.", words: [
          {hz:"每年", py:"měi nián", en:"every year"},
          {hz:"春节", py:"Chūnjié", en:"Spring Festival"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"都会", py:"dōu huì", en:"always"},
          {hz:"回", py:"huí", en:"return to"},
          {hz:"老家。", py:"lǎojiā", en:"hometown"}
        ]},
        { en: "Taking the train home takes ten hours.", words: [
          {hz:"坐", py:"zuò", en:"take"},
          {hz:"火车", py:"huǒchē", en:"train"},
          {hz:"回家", py:"huí jiā", en:"go home"},
          {hz:"要", py:"yào", en:"takes"},
          {hz:"花", py:"huā", en:"spend"},
          {hz:"十", py:"shí", en:"ten"},
          {hz:"个", py:"gè", en:"(measure)"},
          {hz:"小时。", py:"xiǎoshí", en:"hours"}
        ]},
        { en: "Though tiring, I'm very happy.", words: [
          {hz:"虽然", py:"suīrán", en:"although"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"累,", py:"lèi", en:"tired"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"开心。", py:"kāixīn", en:"happy"}
        ]},
        { en: "After arriving home, I first visit my grandparents.", words: [
          {hz:"到家", py:"dào jiā", en:"arrive home"},
          {hz:"以后", py:"yǐhòu", en:"after"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"先", py:"xiān", en:"first"},
          {hz:"去", py:"qù", en:"go"},
          {hz:"看", py:"kàn", en:"see"},
          {hz:"爷爷", py:"yéye", en:"grandpa"},
          {hz:"奶奶。", py:"nǎinai", en:"grandma"}
        ]},
        { en: "Grandma always prepares lots of delicious food.", words: [
          {hz:"奶奶", py:"nǎinai", en:"grandma"},
          {hz:"总是", py:"zǒngshì", en:"always"},
          {hz:"准备", py:"zhǔnbèi", en:"prepares"},
          {hz:"很多", py:"hěnduō", en:"lots of"},
          {hz:"好吃的。", py:"hǎochī de", en:"delicious things"}
        ]},
        { en: "On New Year's Eve the whole family eats reunion dinner together.", words: [
          {hz:"除夕", py:"chúxī", en:"New Year's Eve"},
          {hz:"晚上", py:"wǎnshang", en:"evening"},
          {hz:"全家人", py:"quán jiā rén", en:"the whole family"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"年夜饭。", py:"niányèfàn", en:"reunion dinner"}
        ]},
        { en: "We set off firecrackers and watch the Gala.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"会", py:"huì", en:"will"},
          {hz:"放", py:"fàng", en:"set off"},
          {hz:"鞭炮,", py:"biānpào", en:"firecrackers"},
          {hz:"看", py:"kàn", en:"watch"},
          {hz:"春晚。", py:"Chūnwǎn", en:"Spring Gala"}
        ]},
        { en: "The children love getting red envelopes the most.", words: [
          {hz:"孩子们", py:"háizimen", en:"children"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"收", py:"shōu", en:"receiving"},
          {hz:"红包。", py:"hóngbāo", en:"red envelopes"}
        ]},
        { en: "This is the most important festival of the year.", words: [
          {hz:"这", py:"zhè", en:"this"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"一年中", py:"yì nián zhōng", en:"in a year"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"重要的", py:"zhòngyào de", en:"important"},
          {hz:"节日。", py:"jiérì", en:"festival"}
        ]}
      ]
    },
    {
      id: "i3", level: "intermediate",
      title: { hz: "我的中文老师", py: "Wǒ de Zhōngwén lǎoshī", en: "My Chinese Teacher" },
      description: "A wonderful language teacher.",
      sentences: [
        { en: "My Chinese teacher's surname is Zhang.", words: [
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"中文", py:"Zhōngwén", en:"Chinese"},
          {hz:"老师", py:"lǎoshī", en:"teacher"},
          {hz:"姓", py:"xìng", en:"surname"},
          {hz:"张。", py:"Zhāng", en:"Zhang"}
        ]},
        { en: "She has been teaching for over twenty years.", words: [
          {hz:"她", py:"tā", en:"she"},
          {hz:"已经", py:"yǐjīng", en:"already"},
          {hz:"教书", py:"jiāo shū", en:"taught"},
          {hz:"二十", py:"èrshí", en:"twenty"},
          {hz:"多", py:"duō", en:"over"},
          {hz:"年", py:"nián", en:"years"},
          {hz:"了。", py:"le", en:"(now)"}
        ]},
        { en: "Her teaching methods are very interesting.", words: [
          {hz:"她的", py:"tā de", en:"her"},
          {hz:"教学", py:"jiàoxué", en:"teaching"},
          {hz:"方法", py:"fāngfǎ", en:"methods"},
          {hz:"非常", py:"fēicháng", en:"extremely"},
          {hz:"有趣。", py:"yǒuqù", en:"interesting"}
        ]},
        { en: "She teaches us not only the language but also the culture.", words: [
          {hz:"她", py:"tā", en:"she"},
          {hz:"不只是", py:"bù zhǐshì", en:"not only"},
          {hz:"教", py:"jiāo", en:"teaches"},
          {hz:"我们", py:"wǒmen", en:"us"},
          {hz:"语言,", py:"yǔyán", en:"language"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"教", py:"jiāo", en:"teaches"},
          {hz:"我们", py:"wǒmen", en:"us"},
          {hz:"文化。", py:"wénhuà", en:"culture"}
        ]},
        { en: "In class we often play games.", words: [
          {hz:"课堂上", py:"kètáng shàng", en:"in class"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"经常", py:"jīngcháng", en:"often"},
          {hz:"玩", py:"wán", en:"play"},
          {hz:"游戏。", py:"yóuxì", en:"games"}
        ]},
        { en: "Though Chinese is hard, I like it more and more.", words: [
          {hz:"虽然", py:"suīrán", en:"although"},
          {hz:"中文", py:"Zhōngwén", en:"Chinese"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"难,", py:"nán", en:"difficult"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"越来越", py:"yuèláiyuè", en:"more and more"},
          {hz:"喜欢。", py:"xǐhuan", en:"like it"}
        ]},
        { en: "Teacher Zhang is patient with every student.", words: [
          {hz:"张", py:"Zhāng", en:"Zhang"},
          {hz:"老师", py:"lǎoshī", en:"teacher"},
          {hz:"对", py:"duì", en:"toward"},
          {hz:"每个", py:"měi gè", en:"every"},
          {hz:"学生", py:"xuésheng", en:"student"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"耐心。", py:"nàixīn", en:"patient"}
        ]},
        { en: "I am lucky to have met such a teacher.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"幸运", py:"xìngyùn", en:"lucky"},
          {hz:"能", py:"néng", en:"to be able"},
          {hz:"遇到", py:"yùdào", en:"to meet"},
          {hz:"这样的", py:"zhèyàng de", en:"such"},
          {hz:"老师。", py:"lǎoshī", en:"teacher"}
        ]}
      ]
    },
    {
      id: "i4", level: "intermediate",
      title: { hz: "网上购物", py: "Wǎngshàng gòuwù", en: "Online Shopping" },
      description: "The pros and cons of shopping online.",
      sentences: [
        { en: "Now many people like shopping online.", words: [
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"很多", py:"hěnduō", en:"many"},
          {hz:"人", py:"rén", en:"people"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"在", py:"zài", en:"on"},
          {hz:"网上", py:"wǎngshàng", en:"the internet"},
          {hz:"买", py:"mǎi", en:"buy"},
          {hz:"东西。", py:"dōngxi", en:"things"}
        ]},
        { en: "It's much more convenient than going to a store.", words: [
          {hz:"比", py:"bǐ", en:"compared to"},
          {hz:"去", py:"qù", en:"going to"},
          {hz:"商店", py:"shāngdiàn", en:"store"},
          {hz:"方便", py:"fāngbiàn", en:"convenient"},
          {hz:"多了。", py:"duō le", en:"a lot more"}
        ]},
        { en: "You just tap your phone and things are delivered home.", words: [
          {hz:"只要", py:"zhǐyào", en:"as long as"},
          {hz:"点一点", py:"diǎn yi diǎn", en:"tap a bit"},
          {hz:"手机,", py:"shǒujī", en:"phone"},
          {hz:"东西", py:"dōngxi", en:"things"},
          {hz:"就会", py:"jiù huì", en:"will"},
          {hz:"送", py:"sòng", en:"deliver"},
          {hz:"到", py:"dào", en:"to"},
          {hz:"家里。", py:"jiā lǐ", en:"home"}
        ]},
        { en: "Prices are often cheaper, too.", words: [
          {hz:"价格", py:"jiàgé", en:"price"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"常常", py:"chángcháng", en:"often"},
          {hz:"比较", py:"bǐjiào", en:"relatively"},
          {hz:"便宜。", py:"piányi", en:"cheap"}
        ]},
        { en: "But online shopping also has problems.", words: [
          {hz:"可是", py:"kěshì", en:"but"},
          {hz:"网上", py:"wǎngshàng", en:"online"},
          {hz:"购物", py:"gòuwù", en:"shopping"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"有", py:"yǒu", en:"has"},
          {hz:"问题。", py:"wèntí", en:"problems"}
        ]},
        { en: "Sometimes product quality is poor.", words: [
          {hz:"有时候", py:"yǒushíhou", en:"sometimes"},
          {hz:"商品", py:"shāngpǐn", en:"product"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"质量", py:"zhìliàng", en:"quality"},
          {hz:"不好。", py:"bù hǎo", en:"not good"}
        ]},
        { en: "Or it looks different from the picture.", words: [
          {hz:"或者", py:"huòzhě", en:"or"},
          {hz:"跟", py:"gēn", en:"with"},
          {hz:"图片", py:"túpiàn", en:"picture"},
          {hz:"看起来", py:"kàn qǐlái", en:"looks"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"一样。", py:"yíyàng", en:"the same"}
        ]},
        { en: "So before buying, be sure to read the reviews.", words: [
          {hz:"所以", py:"suǒyǐ", en:"so"},
          {hz:"买", py:"mǎi", en:"buy"},
          {hz:"之前", py:"zhīqián", en:"before"},
          {hz:"一定要", py:"yídìng yào", en:"must"},
          {hz:"看", py:"kàn", en:"read"},
          {hz:"评论。", py:"pínglùn", en:"reviews"}
        ]},
        { en: "I usually only shop on big websites.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"一般", py:"yìbān", en:"usually"},
          {hz:"只", py:"zhǐ", en:"only"},
          {hz:"在", py:"zài", en:"on"},
          {hz:"大", py:"dà", en:"big"},
          {hz:"网站", py:"wǎngzhàn", en:"websites"},
          {hz:"上", py:"shàng", en:"on"},
          {hz:"购物。", py:"gòuwù", en:"shop"}
        ]}
      ]
    },
    {
      id: "i5", level: "intermediate",
      title: { hz: "学外语的挑战", py: "Xué wàiyǔ de tiǎozhàn", en: "Challenges of Learning a Foreign Language" },
      description: "What makes language learning hard — and how to keep going.",
      sentences: [
        { en: "Learning a foreign language is not easy.", words: [
          {hz:"学", py:"xué", en:"learning"},
          {hz:"一门", py:"yì mén", en:"one (measure)"},
          {hz:"外语", py:"wàiyǔ", en:"foreign language"},
          {hz:"不是", py:"bú shì", en:"is not"},
          {hz:"一件", py:"yí jiàn", en:"a (measure)"},
          {hz:"容易的", py:"róngyì de", en:"easy"},
          {hz:"事。", py:"shì", en:"thing"}
        ]},
        { en: "It requires a lot of time and energy.", words: [
          {hz:"需要", py:"xūyào", en:"requires"},
          {hz:"花", py:"huā", en:"spend"},
          {hz:"很多", py:"hěnduō", en:"a lot of"},
          {hz:"时间", py:"shíjiān", en:"time"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"精力。", py:"jīnglì", en:"energy"}
        ]},
        { en: "The biggest challenge is persistence.", words: [
          {hz:"最大的", py:"zuì dà de", en:"biggest"},
          {hz:"挑战", py:"tiǎozhàn", en:"challenge"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"坚持。", py:"jiānchí", en:"persistence"}
        ]},
        { en: "Many people are very motivated at the start.", words: [
          {hz:"很多", py:"hěnduō", en:"many"},
          {hz:"人", py:"rén", en:"people"},
          {hz:"开始", py:"kāishǐ", en:"begin"},
          {hz:"的时候", py:"de shíhou", en:"when"},
          {hz:"很有", py:"hěn yǒu", en:"very"},
          {hz:"动力。", py:"dònglì", en:"motivation"}
        ]},
        { en: "But after a few months they give up.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"过了", py:"guò le", en:"after"},
          {hz:"几个月", py:"jǐ gè yuè", en:"a few months"},
          {hz:"就", py:"jiù", en:"then"},
          {hz:"放弃", py:"fàngqì", en:"give up"},
          {hz:"了。", py:"le", en:"(perfective)"}
        ]},
        { en: "Actually the most important thing is practicing daily.", words: [
          {hz:"其实", py:"qíshí", en:"actually"},
          {hz:"最重要的", py:"zuì zhòngyào de", en:"most important"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"都", py:"dōu", en:"always"},
          {hz:"练习。", py:"liànxí", en:"practice"}
        ]},
        { en: "Even just fifteen minutes is useful.", words: [
          {hz:"哪怕", py:"nǎpà", en:"even if"},
          {hz:"只有", py:"zhǐ yǒu", en:"only"},
          {hz:"十五", py:"shíwǔ", en:"fifteen"},
          {hz:"分钟", py:"fēnzhōng", en:"minutes"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"有用。", py:"yǒuyòng", en:"useful"}
        ]},
        { en: "You also need to find chances to speak with native speakers.", words: [
          {hz:"还要", py:"hái yào", en:"also need"},
          {hz:"找", py:"zhǎo", en:"find"},
          {hz:"机会", py:"jīhuì", en:"chances"},
          {hz:"跟", py:"gēn", en:"with"},
          {hz:"母语者", py:"mǔyǔ zhě", en:"native speakers"},
          {hz:"说话。", py:"shuō huà", en:"speak"}
        ]},
        { en: "Don't be afraid of making mistakes; mistakes are part of learning.", words: [
          {hz:"不要", py:"bú yào", en:"don't"},
          {hz:"怕", py:"pà", en:"fear"},
          {hz:"犯错误,", py:"fàn cuòwù", en:"making mistakes"},
          {hz:"犯错", py:"fàn cuò", en:"making mistakes"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"学习", py:"xuéxí", en:"learning"},
          {hz:"的", py:"de", en:"(particle)"},
          {hz:"一部分。", py:"yí bùfèn", en:"a part"}
        ]}
      ]
    },
    {
      id: "i6", level: "intermediate",
      title: { hz: "一家小餐馆", py: "Yì jiā xiǎo cānguǎn", en: "A Small Restaurant" },
      description: "The dumpling shop around the corner.",
      sentences: [
        { en: "There is a small restaurant near my home.", words: [
          {hz:"我家", py:"wǒ jiā", en:"my home"},
          {hz:"附近", py:"fùjìn", en:"nearby"},
          {hz:"有", py:"yǒu", en:"has"},
          {hz:"一家", py:"yì jiā", en:"one (measure)"},
          {hz:"小", py:"xiǎo", en:"small"},
          {hz:"餐馆。", py:"cānguǎn", en:"restaurant"}
        ]},
        { en: "The owners are a young couple.", words: [
          {hz:"老板", py:"lǎobǎn", en:"owner"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"一对", py:"yí duì", en:"a (measure pair)"},
          {hz:"年轻的", py:"niánqīng de", en:"young"},
          {hz:"夫妻。", py:"fūqī", en:"couple"}
        ]},
        { en: "Every morning at five they start preparing.", words: [
          {hz:"他们", py:"tāmen", en:"they"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"早上", py:"zǎoshang", en:"morning"},
          {hz:"五点", py:"wǔ diǎn", en:"five o'clock"},
          {hz:"就", py:"jiù", en:"already"},
          {hz:"开始", py:"kāishǐ", en:"start"},
          {hz:"准备。", py:"zhǔnbèi", en:"prepare"}
        ]},
        { en: "Though small, the restaurant is very clean.", words: [
          {hz:"餐馆", py:"cānguǎn", en:"the restaurant"},
          {hz:"虽然", py:"suīrán", en:"although"},
          {hz:"不大,", py:"bú dà", en:"not big"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"非常", py:"fēicháng", en:"extremely"},
          {hz:"干净。", py:"gānjìng", en:"clean"}
        ]},
        { en: "Their dumplings are the most famous.", words: [
          {hz:"他们", py:"tāmen", en:"their"},
          {hz:"做的", py:"zuò de", en:"made"},
          {hz:"饺子", py:"jiǎozi", en:"dumplings"},
          {hz:"是", py:"shì", en:"are"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"有名的。", py:"yǒumíng de", en:"famous"}
        ]},
        { en: "Every day at noon people line up.", words: [
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"中午", py:"zhōngwǔ", en:"noon"},
          {hz:"都", py:"dōu", en:"always"},
          {hz:"有人", py:"yǒu rén", en:"there are people"},
          {hz:"排队。", py:"pái duì", en:"lining up"}
        ]},
        { en: "Sometimes you wait thirty minutes.", words: [
          {hz:"有时候", py:"yǒushíhou", en:"sometimes"},
          {hz:"要", py:"yào", en:"need to"},
          {hz:"等", py:"děng", en:"wait"},
          {hz:"三十", py:"sānshí", en:"thirty"},
          {hz:"分钟。", py:"fēnzhōng", en:"minutes"}
        ]},
        { en: "But the dumplings are really worth waiting for.", words: [
          {hz:"不过", py:"búguò", en:"however"},
          {hz:"饺子", py:"jiǎozi", en:"dumplings"},
          {hz:"真的", py:"zhēn de", en:"really"},
          {hz:"值得", py:"zhíde", en:"worth"},
          {hz:"等。", py:"děng", en:"waiting"}
        ]},
        { en: "I go almost every week.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"几乎", py:"jīhū", en:"almost"},
          {hz:"每个", py:"měi gè", en:"every"},
          {hz:"星期", py:"xīngqī", en:"week"},
          {hz:"都", py:"dōu", en:"always"},
          {hz:"去。", py:"qù", en:"go"}
        ]}
      ]
    },
    {
      id: "i7", level: "intermediate",
      title: { hz: "城市和乡村", py: "Chéngshì hé xiāngcūn", en: "City and Countryside" },
      description: "Which is better to live in?",
      sentences: [
        { en: "Many people debate whether city or country is better.", words: [
          {hz:"很多", py:"hěnduō", en:"many"},
          {hz:"人", py:"rén", en:"people"},
          {hz:"讨论", py:"tǎolùn", en:"discuss"},
          {hz:"城市", py:"chéngshì", en:"city"},
          {hz:"好", py:"hǎo", en:"good"},
          {hz:"还是", py:"háishi", en:"or"},
          {hz:"乡村", py:"xiāngcūn", en:"countryside"},
          {hz:"好。", py:"hǎo", en:"good"}
        ]},
        { en: "The city has many jobs and convenient transport.", words: [
          {hz:"城市里", py:"chéngshì lǐ", en:"in the city"},
          {hz:"工作", py:"gōngzuò", en:"job"},
          {hz:"机会", py:"jīhuì", en:"opportunities"},
          {hz:"多,", py:"duō", en:"many"},
          {hz:"交通", py:"jiāotōng", en:"transport"},
          {hz:"方便。", py:"fāngbiàn", en:"convenient"}
        ]},
        { en: "But the pressure is high and the air is bad.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"压力", py:"yālì", en:"pressure"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"大,", py:"dà", en:"great"},
          {hz:"空气", py:"kōngqì", en:"air"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"不好。", py:"bù hǎo", en:"bad"}
        ]},
        { en: "Country life is slower and quieter.", words: [
          {hz:"乡村", py:"xiāngcūn", en:"countryside"},
          {hz:"生活", py:"shēnghuó", en:"life"},
          {hz:"比较", py:"bǐjiào", en:"relatively"},
          {hz:"慢,", py:"màn", en:"slow"},
          {hz:"比较", py:"bǐjiào", en:"relatively"},
          {hz:"安静。", py:"ānjìng", en:"quiet"}
        ]},
        { en: "You can breathe fresh air.", words: [
          {hz:"可以", py:"kěyǐ", en:"can"},
          {hz:"呼吸", py:"hūxī", en:"breathe"},
          {hz:"新鲜的", py:"xīnxiān de", en:"fresh"},
          {hz:"空气。", py:"kōngqì", en:"air"}
        ]},
        { en: "But jobs are hard to find.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"工作", py:"gōngzuò", en:"jobs"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"好找。", py:"hǎo zhǎo", en:"easy to find"}
        ]},
        { en: "Everyone's choice is different.", words: [
          {hz:"每个人", py:"měi gè rén", en:"everyone"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"选择", py:"xuǎnzé", en:"choice"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"一样。", py:"yíyàng", en:"the same"}
        ]},
        { en: "I prefer the city, but often visit the country on weekends.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"更", py:"gèng", en:"more"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"城市,", py:"chéngshì", en:"the city"},
          {hz:"不过", py:"búguò", en:"but"},
          {hz:"周末", py:"zhōumò", en:"weekends"},
          {hz:"常常", py:"chángcháng", en:"often"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"乡下。", py:"xiāngxià", en:"the country"}
        ]}
      ]
    },
    {
      id: "i8", level: "intermediate",
      title: { hz: "我的梦想", py: "Wǒ de mèngxiǎng", en: "My Dream" },
      description: "Hoping to become a writer one day.",
      sentences: [
        { en: "Everyone has their own dream.", words: [
          {hz:"每个人", py:"měi gè rén", en:"everyone"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"有", py:"yǒu", en:"has"},
          {hz:"自己的", py:"zìjǐ de", en:"their own"},
          {hz:"梦想。", py:"mèngxiǎng", en:"dream"}
        ]},
        { en: "My dream is to become a writer.", words: [
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"梦想", py:"mèngxiǎng", en:"dream"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"成为", py:"chéngwéi", en:"to become"},
          {hz:"一名", py:"yì míng", en:"a (measure)"},
          {hz:"作家。", py:"zuòjiā", en:"writer"}
        ]},
        { en: "Since I was small I've liked reading and writing stories.", words: [
          {hz:"从小", py:"cóngxiǎo", en:"since childhood"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"就", py:"jiù", en:"have"},
          {hz:"喜欢", py:"xǐhuan", en:"liked"},
          {hz:"读书", py:"dú shū", en:"reading books"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"写", py:"xiě", en:"writing"},
          {hz:"故事。", py:"gùshi", en:"stories"}
        ]},
        { en: "Though being a writer isn't easy, I don't want to give up.", words: [
          {hz:"虽然", py:"suīrán", en:"although"},
          {hz:"做", py:"zuò", en:"being"},
          {hz:"作家", py:"zuòjiā", en:"a writer"},
          {hz:"不容易,", py:"bù róngyì", en:"isn't easy"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"不想", py:"bù xiǎng", en:"don't want"},
          {hz:"放弃。", py:"fàngqì", en:"to give up"}
        ]},
        { en: "I write something every evening.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"晚上", py:"wǎnshang", en:"evening"},
          {hz:"都会", py:"dōu huì", en:"will"},
          {hz:"写", py:"xiě", en:"write"},
          {hz:"一点", py:"yìdiǎn", en:"a little"},
          {hz:"东西。", py:"dōngxi", en:"something"}
        ]},
        { en: "Sometimes inspiration comes fast, sometimes slow.", words: [
          {hz:"有时候", py:"yǒushíhou", en:"sometimes"},
          {hz:"灵感", py:"línggǎn", en:"inspiration"},
          {hz:"来得", py:"lái de", en:"comes"},
          {hz:"快,", py:"kuài", en:"fast"},
          {hz:"有时候", py:"yǒushíhou", en:"sometimes"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"慢。", py:"màn", en:"slow"}
        ]},
        { en: "I hope one day I can publish my own book.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"希望", py:"xīwàng", en:"hope"},
          {hz:"有一天", py:"yǒu yì tiān", en:"one day"},
          {hz:"能", py:"néng", en:"can"},
          {hz:"出版", py:"chūbǎn", en:"publish"},
          {hz:"自己的", py:"zìjǐ de", en:"my own"},
          {hz:"书。", py:"shū", en:"book"}
        ]},
        { en: "Even if others don't like it, I'll keep going.", words: [
          {hz:"就算", py:"jiùsuàn", en:"even if"},
          {hz:"别人", py:"biérén", en:"others"},
          {hz:"不", py:"bù", en:"don't"},
          {hz:"喜欢,", py:"xǐhuan", en:"like it"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"也", py:"yě", en:"still"},
          {hz:"要", py:"yào", en:"will"},
          {hz:"坚持下去。", py:"jiānchí xiàqù", en:"persist"}
        ]}
      ]
    },
    {
      id: "i9", level: "intermediate",
      title: { hz: "中秋节", py: "Zhōngqiū jié", en: "Mid-Autumn Festival" },
      description: "Mooncakes and a bright full moon.",
      sentences: [
        { en: "Mid-Autumn Festival is an important Chinese holiday.", words: [
          {hz:"中秋节", py:"Zhōngqiū jié", en:"Mid-Autumn Festival"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"中国", py:"Zhōngguó", en:"Chinese"},
          {hz:"一个", py:"yí gè", en:"one (measure)"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"重要的", py:"zhòngyào de", en:"important"},
          {hz:"节日。", py:"jiérì", en:"festival"}
        ]},
        { en: "It's usually in September or October.", words: [
          {hz:"它", py:"tā", en:"it"},
          {hz:"通常", py:"tōngcháng", en:"usually"},
          {hz:"在", py:"zài", en:"in"},
          {hz:"九月", py:"jiǔyuè", en:"September"},
          {hz:"或", py:"huò", en:"or"},
          {hz:"十月。", py:"shíyuè", en:"October"}
        ]},
        { en: "That day the moon is round and bright.", words: [
          {hz:"那一天", py:"nà yì tiān", en:"that day"},
          {hz:"月亮", py:"yuèliang", en:"the moon"},
          {hz:"又", py:"yòu", en:"both"},
          {hz:"圆", py:"yuán", en:"round"},
          {hz:"又", py:"yòu", en:"and"},
          {hz:"亮。", py:"liàng", en:"bright"}
        ]},
        { en: "The whole family admires the moon together.", words: [
          {hz:"全家人", py:"quán jiā rén", en:"whole family"},
          {hz:"会", py:"huì", en:"will"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"赏月。", py:"shǎng yuè", en:"admire the moon"}
        ]},
        { en: "We also eat mooncakes.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"还", py:"hái", en:"also"},
          {hz:"会", py:"huì", en:"will"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"月饼。", py:"yuèbǐng", en:"mooncakes"}
        ]},
        { en: "Mooncakes come in many different flavors.", words: [
          {hz:"月饼", py:"yuèbǐng", en:"mooncakes"},
          {hz:"有", py:"yǒu", en:"have"},
          {hz:"很多", py:"hěnduō", en:"many"},
          {hz:"不同的", py:"bùtóng de", en:"different"},
          {hz:"味道。", py:"wèidào", en:"flavors"}
        ]},
        { en: "My favorite is lotus seed paste with egg yolk.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"莲蓉", py:"liánróng", en:"lotus seed paste"},
          {hz:"蛋黄", py:"dànhuáng", en:"egg yolk"},
          {hz:"的。", py:"de", en:"(kind)"}
        ]},
        { en: "The meaning of Mid-Autumn Festival is reunion.", words: [
          {hz:"中秋节", py:"Zhōngqiū jié", en:"Mid-Autumn Festival"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"意思", py:"yìsi", en:"meaning"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"团圆。", py:"tuányuán", en:"reunion"}
        ]},
        { en: "So many people go home to celebrate.", words: [
          {hz:"所以", py:"suǒyǐ", en:"so"},
          {hz:"很多", py:"hěnduō", en:"many"},
          {hz:"人", py:"rén", en:"people"},
          {hz:"会", py:"huì", en:"will"},
          {hz:"回家", py:"huí jiā", en:"go home"},
          {hz:"过节。", py:"guò jié", en:"celebrate the festival"}
        ]}
      ]
    },
    {
      id: "i10", level: "intermediate",
      title: { hz: "健康的生活", py: "Jiànkāng de shēnghuó", en: "A Healthy Life" },
      description: "Starting to take health seriously.",
      sentences: [
        { en: "Recently I've started paying attention to my health.", words: [
          {hz:"最近", py:"zuìjìn", en:"recently"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"开始", py:"kāishǐ", en:"started"},
          {hz:"注意", py:"zhùyì", en:"pay attention to"},
          {hz:"自己的", py:"zìjǐ de", en:"my own"},
          {hz:"健康。", py:"jiànkāng", en:"health"}
        ]},
        { en: "Before I was too busy and often ate fast food.", words: [
          {hz:"以前", py:"yǐqián", en:"before"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"工作", py:"gōngzuò", en:"work"},
          {hz:"太", py:"tài", en:"too"},
          {hz:"忙,", py:"máng", en:"busy"},
          {hz:"经常", py:"jīngcháng", en:"often"},
          {hz:"吃", py:"chī", en:"ate"},
          {hz:"快餐。", py:"kuàicān", en:"fast food"}
        ]},
        { en: "Now I try to cook for myself.", words: [
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"尽量", py:"jǐnliàng", en:"try my best"},
          {hz:"自己", py:"zìjǐ", en:"myself"},
          {hz:"做饭。", py:"zuò fàn", en:"cook"}
        ]},
        { en: "I've also started running every morning.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"开始", py:"kāishǐ", en:"started"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"早上", py:"zǎoshang", en:"morning"},
          {hz:"跑步。", py:"pǎo bù", en:"running"}
        ]},
        { en: "At the beginning it was really hard.", words: [
          {hz:"开始", py:"kāishǐ", en:"beginning"},
          {hz:"的时候", py:"de shíhou", en:"when"},
          {hz:"真的", py:"zhēn de", en:"really"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"难。", py:"nán", en:"hard"}
        ]},
        { en: "But after a month I felt much better.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"一个月", py:"yí gè yuè", en:"one month"},
          {hz:"以后,", py:"yǐhòu", en:"later"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"感觉", py:"gǎnjué", en:"felt"},
          {hz:"好多了。", py:"hǎo duō le", en:"much better"}
        ]},
        { en: "My sleep quality improved too.", words: [
          {hz:"睡觉", py:"shuìjiào", en:"sleep"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"质量", py:"zhìliàng", en:"quality"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"变", py:"biàn", en:"became"},
          {hz:"好了。", py:"hǎo le", en:"better"}
        ]},
        { en: "I've also learned to relax.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"还", py:"hái", en:"also"},
          {hz:"学会了", py:"xuéhuì le", en:"have learned"},
          {hz:"放松。", py:"fàngsōng", en:"to relax"}
        ]},
        { en: "A healthy body is more important than anything.", words: [
          {hz:"健康的", py:"jiànkāng de", en:"healthy"},
          {hz:"身体", py:"shēntǐ", en:"body"},
          {hz:"比", py:"bǐ", en:"than"},
          {hz:"什么", py:"shénme", en:"anything"},
          {hz:"都", py:"dōu", en:"is more"},
          {hz:"重要。", py:"zhòngyào", en:"important"}
        ]}
      ]
    }
  ];

  window.STORIES = (window.STORIES || []).concat(extra);
})();
