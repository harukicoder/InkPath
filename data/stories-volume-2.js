// Volume 2: 10 new beginner (b11–b20) + 10 new intermediate (i11–i20) stories.
// Appended to window.STORIES defined in stories.js.
(function () {
  const extra = [
    // ============ BEGINNER (continued) ============
    {
      id: "b11", level: "beginner",
      title: { hz: "早上", py: "Zǎoshang", en: "Morning Routine" },
      description: "My morning from waking up to arriving at work.",
      sentences: [
        { en: "I get up at seven every day.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"七点", py:"qī diǎn", en:"seven o'clock"},
          {hz:"起床。", py:"qǐchuáng", en:"get up"}
        ]},
        { en: "First I brush my teeth and wash my face.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"先", py:"xiān", en:"first"},
          {hz:"刷牙、", py:"shuā yá", en:"brush teeth"},
          {hz:"洗脸。", py:"xǐ liǎn", en:"wash face"}
        ]},
        { en: "Then I eat breakfast.", words: [
          {hz:"然后", py:"ránhòu", en:"then"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"早饭。", py:"zǎofàn", en:"breakfast"}
        ]},
        { en: "I like drinking milk and eating bread.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"喝", py:"hē", en:"drink"},
          {hz:"牛奶", py:"niúnǎi", en:"milk"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"吃", py:"chī", en:"eat"},
          {hz:"面包。", py:"miànbāo", en:"bread"}
        ]},
        { en: "At eight I go to work.", words: [
          {hz:"八点", py:"bā diǎn", en:"eight o'clock"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"上班。", py:"shàngbān", en:"work"}
        ]},
        { en: "I take the subway to the company.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"坐", py:"zuò", en:"take"},
          {hz:"地铁", py:"dìtiě", en:"subway"},
          {hz:"去", py:"qù", en:"to"},
          {hz:"公司。", py:"gōngsī", en:"the company"}
        ]},
        { en: "The subway station is close to my home.", words: [
          {hz:"地铁站", py:"dìtiě zhàn", en:"subway station"},
          {hz:"离", py:"lí", en:"from"},
          {hz:"我家", py:"wǒ jiā", en:"my home"},
          {hz:"很近。", py:"hěn jìn", en:"(is) very close"}
        ]},
        { en: "On the way I listen to music.", words: [
          {hz:"路上", py:"lùshang", en:"on the way"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"听", py:"tīng", en:"listen to"},
          {hz:"音乐。", py:"yīnyuè", en:"music"}
        ]},
        { en: "At nine I arrive at the company.", words: [
          {hz:"九点", py:"jiǔ diǎn", en:"nine o'clock"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"到", py:"dào", en:"arrive at"},
          {hz:"公司。", py:"gōngsī", en:"the company"}
        ]},
        { en: "Workdays are very busy.", words: [
          {hz:"工作日", py:"gōngzuò rì", en:"workdays"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"忙。", py:"máng", en:"busy"}
        ]}
      ]
    },
    {
      id: "b12", level: "beginner",
      title: { hz: "去超市", py: "Qù chāoshì", en: "Going to the Supermarket" },
      description: "A weekend trip to the supermarket.",
      sentences: [
        { en: "On the weekend I go to the supermarket to buy things.", words: [
          {hz:"周末", py:"zhōumò", en:"weekend"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"超市", py:"chāoshì", en:"supermarket"},
          {hz:"买", py:"mǎi", en:"buy"},
          {hz:"东西。", py:"dōngxi", en:"things"}
        ]},
        { en: "The supermarket is big and has lots of stuff.", words: [
          {hz:"超市", py:"chāoshì", en:"supermarket"},
          {hz:"很大,", py:"hěn dà", en:"is big"},
          {hz:"东西", py:"dōngxi", en:"things"},
          {hz:"很多。", py:"hěn duō", en:"are many"}
        ]},
        { en: "I bought fruit and vegetables.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"买了", py:"mǎi le", en:"bought"},
          {hz:"水果", py:"shuǐguǒ", en:"fruit"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"蔬菜。", py:"shūcài", en:"vegetables"}
        ]},
        { en: "I also bought milk and eggs.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"买了", py:"mǎi le", en:"bought"},
          {hz:"牛奶", py:"niúnǎi", en:"milk"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"鸡蛋。", py:"jīdàn", en:"eggs"}
        ]},
        { en: "The apples were fresh and not expensive.", words: [
          {hz:"苹果", py:"píngguǒ", en:"apples"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"新鲜,", py:"xīnxiān", en:"fresh"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"贵。", py:"guì", en:"expensive"}
        ]},
        { en: "I forgot to buy bread.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"忘了", py:"wàng le", en:"forgot"},
          {hz:"买", py:"mǎi", en:"to buy"},
          {hz:"面包。", py:"miànbāo", en:"bread"}
        ]},
        { en: "There were a lot of people at the checkout.", words: [
          {hz:"收银台", py:"shōuyíntái", en:"checkout"},
          {hz:"有", py:"yǒu", en:"had"},
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"人。", py:"rén", en:"people"}
        ]},
        { en: "I waited for ten minutes.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"等了", py:"děng le", en:"waited"},
          {hz:"十", py:"shí", en:"ten"},
          {hz:"分钟。", py:"fēnzhōng", en:"minutes"}
        ]},
        { en: "After I got home, I made dinner.", words: [
          {hz:"回家", py:"huí jiā", en:"go home"},
          {hz:"以后,", py:"yǐhòu", en:"after"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"做了", py:"zuò le", en:"made"},
          {hz:"晚饭。", py:"wǎnfàn", en:"dinner"}
        ]}
      ]
    },
    {
      id: "b13", level: "beginner",
      title: { hz: "打电话", py: "Dǎ diànhuà", en: "Making a Phone Call" },
      description: "Calling a classmate to invite them out.",
      sentences: [
        { en: "Hello, is this Xiao Li?", words: [
          {hz:"喂,", py:"wèi", en:"hello"},
          {hz:"你好,", py:"nǐ hǎo", en:"hi"},
          {hz:"是", py:"shì", en:"is this"},
          {hz:"小李", py:"Xiǎo Lǐ", en:"Xiao Li"},
          {hz:"吗?", py:"ma", en:"?"}
        ]},
        { en: "It's me — who's this?", words: [
          {hz:"是", py:"shì", en:"(it) is"},
          {hz:"我,", py:"wǒ", en:"me"},
          {hz:"你", py:"nǐ", en:"you"},
          {hz:"是", py:"shì", en:"are"},
          {hz:"谁?", py:"shéi", en:"who"}
        ]},
        { en: "I'm your classmate Xiao Wang.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"是", py:"shì", en:"am"},
          {hz:"你的", py:"nǐ de", en:"your"},
          {hz:"同学", py:"tóngxué", en:"classmate"},
          {hz:"小王。", py:"Xiǎo Wáng", en:"Xiao Wang"}
        ]},
        { en: "Are you free tomorrow?", words: [
          {hz:"明天", py:"míngtiān", en:"tomorrow"},
          {hz:"你", py:"nǐ", en:"you"},
          {hz:"有空", py:"yǒu kòng", en:"have free time"},
          {hz:"吗?", py:"ma", en:"?"}
        ]},
        { en: "I'd like to take you out to eat.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"想", py:"xiǎng", en:"would like"},
          {hz:"请", py:"qǐng", en:"to invite"},
          {hz:"你", py:"nǐ", en:"you"},
          {hz:"吃饭。", py:"chī fàn", en:"to eat"}
        ]},
        { en: "Sure, what time?", words: [
          {hz:"好啊,", py:"hǎo a", en:"sure"},
          {hz:"几点?", py:"jǐ diǎn", en:"what time"}
        ]},
        { en: "Seven in the evening, the usual place.", words: [
          {hz:"晚上", py:"wǎnshang", en:"evening"},
          {hz:"七点,", py:"qī diǎn", en:"seven o'clock"},
          {hz:"老地方。", py:"lǎo dìfang", en:"the usual place"}
        ]},
        { en: "Okay, see you tomorrow.", words: [
          {hz:"好的,", py:"hǎo de", en:"okay"},
          {hz:"明天见。", py:"míngtiān jiàn", en:"see you tomorrow"}
        ]},
        { en: "Goodbye.", words: [
          {hz:"再见。", py:"zàijiàn", en:"goodbye"}
        ]}
      ]
    },
    {
      id: "b14", level: "beginner",
      title: { hz: "去银行", py: "Qù yínháng", en: "Going to the Bank" },
      description: "Exchanging money at the bank.",
      sentences: [
        { en: "Today I'm going to the bank.", words: [
          {hz:"今天", py:"jīntiān", en:"today"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"去", py:"qù", en:"(am) going to"},
          {hz:"银行。", py:"yínháng", en:"the bank"}
        ]},
        { en: "I want to exchange some money.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"要", py:"yào", en:"want"},
          {hz:"换", py:"huàn", en:"exchange"},
          {hz:"一些", py:"yìxiē", en:"some"},
          {hz:"钱。", py:"qián", en:"money"}
        ]},
        { en: "The bank opens at nine.", words: [
          {hz:"银行", py:"yínháng", en:"the bank"},
          {hz:"九点", py:"jiǔ diǎn", en:"at nine"},
          {hz:"开门。", py:"kāimén", en:"opens"}
        ]},
        { en: "I arrived at eight-thirty in the morning.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"早上", py:"zǎoshang", en:"(in the) morning"},
          {hz:"八点半", py:"bā diǎn bàn", en:"at eight-thirty"},
          {hz:"就", py:"jiù", en:"already"},
          {hz:"到了。", py:"dào le", en:"arrived"}
        ]},
        { en: "After waiting a little, the door opened.", words: [
          {hz:"等了", py:"děng le", en:"waited"},
          {hz:"一会儿,", py:"yíhuìr", en:"a bit"},
          {hz:"门", py:"mén", en:"the door"},
          {hz:"开了。", py:"kāi le", en:"opened"}
        ]},
        { en: "There weren't many people inside.", words: [
          {hz:"里面", py:"lǐmiàn", en:"inside"},
          {hz:"人", py:"rén", en:"people"},
          {hz:"不多。", py:"bù duō", en:"were not many"}
        ]},
        { en: "I used my passport to take care of things.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"用了", py:"yòng le", en:"used"},
          {hz:"护照", py:"hùzhào", en:"passport"},
          {hz:"办事。", py:"bànshì", en:"to handle matters"}
        ]},
        { en: "Afterward I went to work.", words: [
          {hz:"办完", py:"bàn wán", en:"after finishing"},
          {hz:"以后,", py:"yǐhòu", en:"after"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"去", py:"qù", en:"went to"},
          {hz:"上班。", py:"shàngbān", en:"work"}
        ]}
      ]
    },
    {
      id: "b15", level: "beginner",
      title: { hz: "看病", py: "Kàn bìng", en: "Visiting the Doctor" },
      description: "Being sick and going to the hospital.",
      sentences: [
        { en: "I don't feel well today.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"今天", py:"jīntiān", en:"today"},
          {hz:"不", py:"bù", en:"don't"},
          {hz:"舒服。", py:"shūfu", en:"feel well"}
        ]},
        { en: "My head hurts.", words: [
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"头", py:"tóu", en:"head"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"疼。", py:"téng", en:"(is) sore"}
        ]},
        { en: "Mom said I should go to the hospital.", words: [
          {hz:"妈妈", py:"māma", en:"mom"},
          {hz:"说", py:"shuō", en:"said"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"应该", py:"yīnggāi", en:"should"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"医院。", py:"yīyuàn", en:"the hospital"}
        ]},
        { en: "The doctor asked me: what's wrong?", words: [
          {hz:"医生", py:"yīshēng", en:"the doctor"},
          {hz:"问", py:"wèn", en:"asked"},
          {hz:"我:", py:"wǒ", en:"me"},
          {hz:"你", py:"nǐ", en:"you"},
          {hz:"怎么了?", py:"zěnme le", en:"what's wrong"}
        ]},
        { en: "I said my head hurts and I'm coughing too.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"说", py:"shuō", en:"said"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"头疼,", py:"tóu téng", en:"head hurts"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"咳嗽。", py:"késou", en:"cough"}
        ]},
        { en: "The doctor had me take medicine and drink lots of water.", words: [
          {hz:"医生", py:"yīshēng", en:"the doctor"},
          {hz:"让", py:"ràng", en:"let/had"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"吃药,", py:"chī yào", en:"take medicine"},
          {hz:"多", py:"duō", en:"a lot"},
          {hz:"喝水。", py:"hē shuǐ", en:"drink water"}
        ]},
        { en: "He said I need to rest.", words: [
          {hz:"他", py:"tā", en:"he"},
          {hz:"说", py:"shuō", en:"said"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"需要", py:"xūyào", en:"need"},
          {hz:"休息。", py:"xiūxi", en:"to rest"}
        ]},
        { en: "In the afternoon I slept at home.", words: [
          {hz:"下午", py:"xiàwǔ", en:"afternoon"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"在家", py:"zài jiā", en:"at home"},
          {hz:"睡觉。", py:"shuìjiào", en:"slept"}
        ]},
        { en: "By evening I felt a bit better.", words: [
          {hz:"晚上", py:"wǎnshang", en:"evening"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"觉得", py:"juéde", en:"felt"},
          {hz:"好", py:"hǎo", en:"better"},
          {hz:"一点", py:"yì diǎn", en:"a bit"},
          {hz:"了。", py:"le", en:"(already)"}
        ]}
      ]
    },
    {
      id: "b16", level: "beginner",
      title: { hz: "生日派对", py: "Shēngrì pàiduì", en: "Birthday Party" },
      description: "A birthday celebration at home with friends.",
      sentences: [
        { en: "Today is my birthday.", words: [
          {hz:"今天", py:"jīntiān", en:"today"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"生日。", py:"shēngrì", en:"birthday"}
        ]},
        { en: "My friends came over to my house.", words: [
          {hz:"朋友们", py:"péngyou men", en:"friends"},
          {hz:"来", py:"lái", en:"came to"},
          {hz:"我家", py:"wǒ jiā", en:"my house"},
          {hz:"玩。", py:"wán", en:"hang out"}
        ]},
        { en: "They brought a lot of presents.", words: [
          {hz:"他们", py:"tāmen", en:"they"},
          {hz:"带了", py:"dài le", en:"brought"},
          {hz:"很多", py:"hěn duō", en:"a lot of"},
          {hz:"礼物。", py:"lǐwù", en:"presents"}
        ]},
        { en: "Mom made a big cake.", words: [
          {hz:"妈妈", py:"māma", en:"mom"},
          {hz:"做了", py:"zuò le", en:"made"},
          {hz:"一个", py:"yí gè", en:"a"},
          {hz:"大", py:"dà", en:"big"},
          {hz:"蛋糕。", py:"dàngāo", en:"cake"}
        ]},
        { en: "On the cake there were more than ten candles.", words: [
          {hz:"蛋糕", py:"dàngāo", en:"(the) cake"},
          {hz:"上面", py:"shàngmiàn", en:"on top"},
          {hz:"有", py:"yǒu", en:"had"},
          {hz:"十几", py:"shí jǐ", en:"more than ten"},
          {hz:"根", py:"gēn", en:"(measure)"},
          {hz:"蜡烛。", py:"làzhú", en:"candles"}
        ]},
        { en: "We sang the birthday song together.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"唱", py:"chàng", en:"sang"},
          {hz:"生日歌。", py:"shēngrì gē", en:"birthday song"}
        ]},
        { en: "I made a wish.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"许了", py:"xǔ le", en:"made"},
          {hz:"一个", py:"yí gè", en:"a"},
          {hz:"愿望。", py:"yuànwàng", en:"wish"}
        ]},
        { en: "Then I blew out the candles.", words: [
          {hz:"然后", py:"ránhòu", en:"then"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"吹灭", py:"chuī miè", en:"blew out"},
          {hz:"蜡烛。", py:"làzhú", en:"the candles"}
        ]},
        { en: "Everyone ate cake together.", words: [
          {hz:"大家", py:"dàjiā", en:"everyone"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"吃", py:"chī", en:"ate"},
          {hz:"蛋糕。", py:"dàngāo", en:"cake"}
        ]},
        { en: "I was very happy today.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"今天", py:"jīntiān", en:"today"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"开心。", py:"kāixīn", en:"(was) happy"}
        ]}
      ]
    },
    {
      id: "b17", level: "beginner",
      title: { hz: "问路", py: "Wèn lù", en: "Asking for Directions" },
      description: "Polite exchanges while looking for the station.",
      sentences: [
        { en: "Excuse me, where is the subway station?", words: [
          {hz:"请问,", py:"qǐngwèn", en:"excuse me"},
          {hz:"地铁站", py:"dìtiě zhàn", en:"the subway station"},
          {hz:"在", py:"zài", en:"is at"},
          {hz:"哪里?", py:"nǎli", en:"where"}
        ]},
        { en: "The subway station is up ahead.", words: [
          {hz:"地铁站", py:"dìtiě zhàn", en:"the subway station"},
          {hz:"在", py:"zài", en:"is"},
          {hz:"前面。", py:"qiánmiàn", en:"up ahead"}
        ]},
        { en: "Walk straight for five minutes.", words: [
          {hz:"一直", py:"yìzhí", en:"straight"},
          {hz:"往前走", py:"wǎng qián zǒu", en:"walk ahead"},
          {hz:"五", py:"wǔ", en:"five"},
          {hz:"分钟。", py:"fēnzhōng", en:"minutes"}
        ]},
        { en: "Then turn right.", words: [
          {hz:"然后", py:"ránhòu", en:"then"},
          {hz:"向右", py:"xiàng yòu", en:"to the right"},
          {hz:"转。", py:"zhuǎn", en:"turn"}
        ]},
        { en: "You'll see it.", words: [
          {hz:"你", py:"nǐ", en:"you"},
          {hz:"就会", py:"jiù huì", en:"will"},
          {hz:"看到。", py:"kàn dào", en:"see (it)"}
        ]},
        { en: "Thank you.", words: [
          {hz:"谢谢", py:"xièxie", en:"thank"},
          {hz:"你。", py:"nǐ", en:"you"}
        ]},
        { en: "You're welcome.", words: [
          {hz:"不客气。", py:"bú kèqi", en:"you're welcome"}
        ]},
        { en: "Excuse me, is the airport far from here?", words: [
          {hz:"请问,", py:"qǐngwèn", en:"excuse me"},
          {hz:"从这里", py:"cóng zhèlǐ", en:"from here"},
          {hz:"到", py:"dào", en:"to"},
          {hz:"机场", py:"jīchǎng", en:"the airport"},
          {hz:"远不远?", py:"yuǎn bù yuǎn", en:"(is it) far"}
        ]},
        { en: "Not too far — thirty minutes by bus.", words: [
          {hz:"不", py:"bú", en:"not"},
          {hz:"太", py:"tài", en:"too"},
          {hz:"远,", py:"yuǎn", en:"far"},
          {hz:"坐", py:"zuò", en:"take"},
          {hz:"公交车", py:"gōngjiāo chē", en:"bus"},
          {hz:"三十", py:"sānshí", en:"thirty"},
          {hz:"分钟。", py:"fēnzhōng", en:"minutes"}
        ]}
      ]
    },
    {
      id: "b18", level: "beginner",
      title: { hz: "借书", py: "Jiè shū", en: "Borrowing a Book" },
      description: "A trip to the library.",
      sentences: [
        { en: "I often go to the library.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"常常", py:"chángcháng", en:"often"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"图书馆。", py:"túshūguǎn", en:"the library"}
        ]},
        { en: "The library has many books.", words: [
          {hz:"图书馆", py:"túshūguǎn", en:"the library"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"书", py:"shū", en:"books"},
          {hz:"很多。", py:"hěn duō", en:"are many"}
        ]},
        { en: "Today I borrowed three books.", words: [
          {hz:"今天", py:"jīntiān", en:"today"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"借了", py:"jiè le", en:"borrowed"},
          {hz:"三", py:"sān", en:"three"},
          {hz:"本", py:"běn", en:"(measure)"},
          {hz:"书。", py:"shū", en:"books"}
        ]},
        { en: "One is a Chinese book.", words: [
          {hz:"一本", py:"yì běn", en:"one"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"中文书。", py:"zhōngwén shū", en:"a Chinese book"}
        ]},
        { en: "One is an English book.", words: [
          {hz:"一本", py:"yì běn", en:"one"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"英文书。", py:"yīngwén shū", en:"an English book"}
        ]},
        { en: "And one is about history.", words: [
          {hz:"还有", py:"hái yǒu", en:"and"},
          {hz:"一本", py:"yì běn", en:"one"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"关于", py:"guānyú", en:"about"},
          {hz:"历史", py:"lìshǐ", en:"history"},
          {hz:"的。", py:"de", en:""}
        ]},
        { en: "You need a library card to borrow books.", words: [
          {hz:"借书", py:"jiè shū", en:"(to) borrow books"},
          {hz:"要", py:"yào", en:"need to"},
          {hz:"用", py:"yòng", en:"use"},
          {hz:"图书证。", py:"túshū zhèng", en:"a library card"}
        ]},
        { en: "Books can be borrowed for two weeks.", words: [
          {hz:"书", py:"shū", en:"books"},
          {hz:"可以", py:"kěyǐ", en:"can"},
          {hz:"借", py:"jiè", en:"be borrowed"},
          {hz:"两", py:"liǎng", en:"two"},
          {hz:"个", py:"gè", en:"(measure)"},
          {hz:"星期。", py:"xīngqī", en:"weeks"}
        ]},
        { en: "I like reading at home.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"在家里", py:"zài jiā lǐ", en:"at home"},
          {hz:"看书。", py:"kàn shū", en:"reading"}
        ]}
      ]
    },
    {
      id: "b19", level: "beginner",
      title: { hz: "坐公交车", py: "Zuò gōngjiāo chē", en: "Taking the Bus" },
      description: "Daily commute by bus.",
      sentences: [
        { en: "The place I live has no subway.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"住的", py:"zhù de", en:"live (in)"},
          {hz:"地方", py:"dìfang", en:"place"},
          {hz:"没有", py:"méi yǒu", en:"has no"},
          {hz:"地铁。", py:"dìtiě", en:"subway"}
        ]},
        { en: "So I often take the bus.", words: [
          {hz:"所以", py:"suǒyǐ", en:"so"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"常常", py:"chángcháng", en:"often"},
          {hz:"坐", py:"zuò", en:"take"},
          {hz:"公交车。", py:"gōngjiāo chē", en:"the bus"}
        ]},
        { en: "The bus stop is right outside my door.", words: [
          {hz:"公交车站", py:"gōngjiāo chē zhàn", en:"bus stop"},
          {hz:"在", py:"zài", en:"is at"},
          {hz:"我家", py:"wǒ jiā", en:"my home"},
          {hz:"门口。", py:"ménkǒu", en:"doorway"}
        ]},
        { en: "I take bus number 3 to school.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"坐", py:"zuò", en:"take"},
          {hz:"三路车", py:"sān lù chē", en:"bus number 3"},
          {hz:"去", py:"qù", en:"to"},
          {hz:"学校。", py:"xuéxiào", en:"school"}
        ]},
        { en: "The ticket is two yuan.", words: [
          {hz:"车票", py:"chē piào", en:"ticket"},
          {hz:"两", py:"liǎng", en:"two"},
          {hz:"块", py:"kuài", en:"yuan"},
          {hz:"钱。", py:"qián", en:"(currency)"}
        ]},
        { en: "Sometimes there are a lot of people in the bus.", words: [
          {hz:"车里", py:"chē lǐ", en:"in the bus"},
          {hz:"有时候", py:"yǒu shíhou", en:"sometimes"},
          {hz:"人", py:"rén", en:"people"},
          {hz:"很多。", py:"hěn duō", en:"are many"}
        ]},
        { en: "I usually give my seat to elderly people.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"一般", py:"yìbān", en:"usually"},
          {hz:"给", py:"gěi", en:"to"},
          {hz:"老人", py:"lǎorén", en:"elderly"},
          {hz:"让座。", py:"ràng zuò", en:"give up my seat"}
        ]},
        { en: "The bus is a bit slower than the subway.", words: [
          {hz:"公交车", py:"gōngjiāo chē", en:"the bus"},
          {hz:"比", py:"bǐ", en:"(is) than"},
          {hz:"地铁", py:"dìtiě", en:"subway"},
          {hz:"慢", py:"màn", en:"slower"},
          {hz:"一点。", py:"yì diǎn", en:"a bit"}
        ]},
        { en: "But it's cheaper than the subway.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"比", py:"bǐ", en:"than"},
          {hz:"地铁", py:"dìtiě", en:"subway"},
          {hz:"便宜。", py:"piányi", en:"(is) cheaper"}
        ]}
      ]
    },
    {
      id: "b20", level: "beginner",
      title: { hz: "周末计划", py: "Zhōumò jìhuà", en: "Weekend Plans" },
      description: "Saturday with friends, from park to movie.",
      sentences: [
        { en: "Tomorrow is Saturday.", words: [
          {hz:"明天", py:"míngtiān", en:"tomorrow"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"星期六。", py:"xīngqīliù", en:"Saturday"}
        ]},
        { en: "I want to go out with friends.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"想", py:"xiǎng", en:"want"},
          {hz:"和", py:"hé", en:"with"},
          {hz:"朋友", py:"péngyou", en:"friends"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"出去", py:"chūqù", en:"go out"},
          {hz:"玩。", py:"wán", en:"have fun"}
        ]},
        { en: "In the morning we'll go jogging at the park.", words: [
          {hz:"上午", py:"shàngwǔ", en:"morning"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"去", py:"qù", en:"go to"},
          {hz:"公园", py:"gōngyuán", en:"the park"},
          {hz:"跑步。", py:"pǎobù", en:"jog"}
        ]},
        { en: "At noon we'll eat at a restaurant.", words: [
          {hz:"中午", py:"zhōngwǔ", en:"noon"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"在", py:"zài", en:"at"},
          {hz:"饭馆", py:"fànguǎn", en:"a restaurant"},
          {hz:"吃饭。", py:"chī fàn", en:"eat"}
        ]},
        { en: "In the afternoon we'll see a movie.", words: [
          {hz:"下午", py:"xiàwǔ", en:"afternoon"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"去", py:"qù", en:"(will) go"},
          {hz:"看", py:"kàn", en:"see"},
          {hz:"电影。", py:"diànyǐng", en:"a movie"}
        ]},
        { en: "The movie is new and very good.", words: [
          {hz:"电影", py:"diànyǐng", en:"the movie"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"新的,", py:"xīn de", en:"new"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"好看。", py:"hǎokàn", en:"(is) good"}
        ]},
        { en: "In the evening we'll cook together.", words: [
          {hz:"晚上", py:"wǎnshang", en:"evening"},
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"做饭。", py:"zuò fàn", en:"cook"}
        ]},
        { en: "We'll make Chinese and Japanese dishes.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"做了", py:"zuò le", en:"(will) make"},
          {hz:"中国菜", py:"zhōngguó cài", en:"Chinese dishes"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"日本菜。", py:"rìběn cài", en:"Japanese dishes"}
        ]},
        { en: "The weekend will be very enjoyable.", words: [
          {hz:"周末", py:"zhōumò", en:"the weekend"},
          {hz:"过得", py:"guò de", en:"(will) pass"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"愉快。", py:"yúkuài", en:"pleasantly"}
        ]}
      ]
    },

    // ============ INTERMEDIATE (continued) ============
    {
      id: "i11", level: "intermediate",
      title: { hz: "找工作", py: "Zhǎo gōngzuò", en: "Job Hunting" },
      description: "A fresh graduate looking for their first job.",
      sentences: [
        { en: "I just graduated from university and started looking for work.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"刚刚", py:"gānggāng", en:"just"},
          {hz:"大学", py:"dàxué", en:"university"},
          {hz:"毕业,", py:"bìyè", en:"graduated"},
          {hz:"开始", py:"kāishǐ", en:"started"},
          {hz:"找", py:"zhǎo", en:"looking for"},
          {hz:"工作。", py:"gōngzuò", en:"work"}
        ]},
        { en: "Jobs aren't easy to find these days.", words: [
          {hz:"现在的", py:"xiànzài de", en:"currently"},
          {hz:"工作", py:"gōngzuò", en:"jobs"},
          {hz:"不", py:"bù", en:"not"},
          {hz:"太", py:"tài", en:"too"},
          {hz:"好找。", py:"hǎo zhǎo", en:"easy to find"}
        ]},
        { en: "I looked at many job ads online.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"在网上", py:"zài wǎng shàng", en:"online"},
          {hz:"看了", py:"kàn le", en:"looked at"},
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"招聘", py:"zhāopìn", en:"recruitment"},
          {hz:"广告。", py:"guǎnggào", en:"ads"}
        ]},
        { en: "Some companies require work experience.", words: [
          {hz:"有的", py:"yǒu de", en:"some"},
          {hz:"公司", py:"gōngsī", en:"companies"},
          {hz:"要求", py:"yāoqiú", en:"require"},
          {hz:"有", py:"yǒu", en:"having"},
          {hz:"工作", py:"gōngzuò", en:"work"},
          {hz:"经验。", py:"jīngyàn", en:"experience"}
        ]},
        { en: "I have no experience, so it's hard.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"没有", py:"méi yǒu", en:"don't have"},
          {hz:"经验,", py:"jīngyàn", en:"experience"},
          {hz:"所以", py:"suǒyǐ", en:"so"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"难。", py:"nán", en:"(it is) hard"}
        ]},
        { en: "I send out resumes every day.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"投", py:"tóu", en:"submit"},
          {hz:"简历。", py:"jiǎnlì", en:"resumes"}
        ]},
        { en: "Last week I got three interview invitations.", words: [
          {hz:"上个星期,", py:"shàng gè xīngqī", en:"last week"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"接到了", py:"jiēdào le", en:"received"},
          {hz:"三个", py:"sān gè", en:"three"},
          {hz:"面试", py:"miànshì", en:"interview"},
          {hz:"通知。", py:"tōngzhī", en:"notices"}
        ]},
        { en: "I prepared very seriously.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"准备", py:"zhǔnbèi", en:"prepared"},
          {hz:"得", py:"de", en:"(adv.)"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"认真。", py:"rènzhēn", en:"seriously"}
        ]},
        { en: "One company gave me a chance.", words: [
          {hz:"一家", py:"yì jiā", en:"one"},
          {hz:"公司", py:"gōngsī", en:"company"},
          {hz:"给了", py:"gěi le", en:"gave"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"机会。", py:"jīhuì", en:"a chance"}
        ]},
        { en: "Though the salary isn't high, I'm very happy.", words: [
          {hz:"工资", py:"gōngzī", en:"the salary"},
          {hz:"虽然", py:"suīrán", en:"although"},
          {hz:"不高,", py:"bù gāo", en:"(is) not high"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"高兴。", py:"gāoxìng", en:"(am) happy"}
        ]},
        { en: "This is the first job of my life.", words: [
          {hz:"这是", py:"zhè shì", en:"this is"},
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"人生", py:"rénshēng", en:"life"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"第一份", py:"dì yī fèn", en:"first"},
          {hz:"工作。", py:"gōngzuò", en:"job"}
        ]},
        { en: "I've decided to work hard.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"决定", py:"juédìng", en:"decided"},
          {hz:"好好", py:"hǎohāo", en:"well"},
          {hz:"努力。", py:"nǔlì", en:"to work hard"}
        ]}
      ]
    },
    {
      id: "i12", level: "intermediate",
      title: { hz: "搬家", py: "Bān jiā", en: "Moving House" },
      description: "Moving into a bigger, cheaper place.",
      sentences: [
        { en: "Last month I moved.", words: [
          {hz:"上个月", py:"shàng gè yuè", en:"last month"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"搬了", py:"bān le", en:"moved"},
          {hz:"家。", py:"jiā", en:"house"}
        ]},
        { en: "My old place was too small.", words: [
          {hz:"以前的", py:"yǐqián de", en:"the old"},
          {hz:"房子", py:"fángzi", en:"place"},
          {hz:"太", py:"tài", en:"too"},
          {hz:"小了。", py:"xiǎo le", en:"(was) small"}
        ]},
        { en: "The new place is a bit bigger and cheaper too.", words: [
          {hz:"新的", py:"xīn de", en:"the new"},
          {hz:"房子", py:"fángzi", en:"place"},
          {hz:"大", py:"dà", en:"(is) bigger"},
          {hz:"一点,", py:"yì diǎn", en:"a bit"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"更", py:"gèng", en:"even more"},
          {hz:"便宜。", py:"piányi", en:"cheap"}
        ]},
        { en: "On moving day, friends came to help.", words: [
          {hz:"搬家", py:"bān jiā", en:"(on) moving"},
          {hz:"那天,", py:"nà tiān", en:"that day"},
          {hz:"朋友们", py:"péngyou men", en:"friends"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"来", py:"lái", en:"came"},
          {hz:"帮忙。", py:"bāngmáng", en:"to help"}
        ]},
        { en: "We moved for a whole day.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"搬了", py:"bān le", en:"moved"},
          {hz:"一整天。", py:"yì zhěng tiān", en:"a whole day"}
        ]},
        { en: "The heaviest things were the fridge and the sofa.", words: [
          {hz:"最", py:"zuì", en:"most"},
          {hz:"重的", py:"zhòng de", en:"heavy"},
          {hz:"东西", py:"dōngxi", en:"things"},
          {hz:"是", py:"shì", en:"were"},
          {hz:"冰箱", py:"bīngxiāng", en:"the fridge"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"沙发。", py:"shāfā", en:"the sofa"}
        ]},
        { en: "The new kitchen is bigger than before.", words: [
          {hz:"新家", py:"xīn jiā", en:"the new home"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"厨房", py:"chúfáng", en:"kitchen"},
          {hz:"比", py:"bǐ", en:"than"},
          {hz:"以前", py:"yǐqián", en:"before"},
          {hz:"大。", py:"dà", en:"(is) bigger"}
        ]},
        { en: "I put a bookshelf in the living room.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"在", py:"zài", en:"in"},
          {hz:"客厅", py:"kètīng", en:"the living room"},
          {hz:"放了", py:"fàng le", en:"put"},
          {hz:"一个", py:"yí gè", en:"a"},
          {hz:"书架。", py:"shūjià", en:"bookshelf"}
        ]},
        { en: "There's a big bed in the bedroom.", words: [
          {hz:"卧室里", py:"wòshì lǐ", en:"in the bedroom"},
          {hz:"有", py:"yǒu", en:"(there) is"},
          {hz:"一张", py:"yì zhāng", en:"a"},
          {hz:"大床。", py:"dà chuáng", en:"big bed"}
        ]},
        { en: "Moving was tiring, but worth it.", words: [
          {hz:"搬家", py:"bān jiā", en:"moving"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"累,", py:"lèi", en:"tiring"},
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"值得。", py:"zhídé", en:"worth it"}
        ]},
        { en: "Now I really like this new home.", words: [
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"很", py:"hěn", en:"really"},
          {hz:"喜欢", py:"xǐhuan", en:"like"},
          {hz:"这个", py:"zhè gè", en:"this"},
          {hz:"新家。", py:"xīn jiā", en:"new home"}
        ]},
        { en: "I plan to invite friends over for dinner.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"打算", py:"dǎsuan", en:"plan to"},
          {hz:"请", py:"qǐng", en:"invite"},
          {hz:"朋友们", py:"péngyou men", en:"friends"},
          {hz:"来", py:"lái", en:"over"},
          {hz:"吃饭。", py:"chī fàn", en:"for a meal"}
        ]}
      ]
    },
    {
      id: "i13", level: "intermediate",
      title: { hz: "网上购物", py: "Wǎngshàng gòuwù", en: "Online Shopping" },
      description: "Why online shopping is reshaping daily life.",
      sentences: [
        { en: "Lately I often buy things online.", words: [
          {hz:"最近", py:"zuìjìn", en:"lately"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"经常", py:"jīngcháng", en:"often"},
          {hz:"在网上", py:"zài wǎng shàng", en:"online"},
          {hz:"买", py:"mǎi", en:"buy"},
          {hz:"东西。", py:"dōngxi", en:"things"}
        ]},
        { en: "Online shopping is convenient and cheap.", words: [
          {hz:"网购", py:"wǎnggòu", en:"online shopping"},
          {hz:"方便", py:"fāngbiàn", en:"(is) convenient"},
          {hz:"又", py:"yòu", en:"and"},
          {hz:"便宜。", py:"piányi", en:"cheap"}
        ]},
        { en: "I just need my phone to place an order.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"只需要", py:"zhǐ xūyào", en:"only need"},
          {hz:"用", py:"yòng", en:"to use"},
          {hz:"手机", py:"shǒujī", en:"phone"},
          {hz:"就", py:"jiù", en:"to"},
          {hz:"可以", py:"kěyǐ", en:"can"},
          {hz:"下单。", py:"xià dān", en:"place an order"}
        ]},
        { en: "Delivery speed is getting faster.", words: [
          {hz:"送货", py:"sòng huò", en:"delivery"},
          {hz:"速度", py:"sùdù", en:"speed"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"越来越", py:"yuè lái yuè", en:"more and more"},
          {hz:"快。", py:"kuài", en:"fast"}
        ]},
        { en: "Sometimes it arrives the next day.", words: [
          {hz:"有时候", py:"yǒu shíhou", en:"sometimes"},
          {hz:"第二天", py:"dì èr tiān", en:"the next day"},
          {hz:"就", py:"jiù", en:"already"},
          {hz:"到了。", py:"dào le", en:"arrives"}
        ]},
        { en: "But sometimes the item looks different from online.", words: [
          {hz:"不过,", py:"búguò", en:"however"},
          {hz:"有些", py:"yǒu xiē", en:"some"},
          {hz:"东西", py:"dōngxi", en:"items"},
          {hz:"网上的", py:"wǎng shàng de", en:"the online one"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"实际", py:"shíjì", en:"the actual"},
          {hz:"不一样。", py:"bù yíyàng", en:"(are) different"}
        ]},
        { en: "The color might be different.", words: [
          {hz:"颜色", py:"yánsè", en:"the color"},
          {hz:"可能", py:"kěnéng", en:"might"},
          {hz:"不同。", py:"bù tóng", en:"(be) different"}
        ]},
        { en: "The size might not fit.", words: [
          {hz:"大小", py:"dàxiǎo", en:"the size"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"可能", py:"kěnéng", en:"might"},
          {hz:"不合适。", py:"bù héshì", en:"not fit"}
        ]},
        { en: "If you're not satisfied, you can return it.", words: [
          {hz:"如果", py:"rúguǒ", en:"if"},
          {hz:"不满意,", py:"bù mǎnyì", en:"not satisfied"},
          {hz:"还可以", py:"hái kěyǐ", en:"you can also"},
          {hz:"退货。", py:"tuì huò", en:"return it"}
        ]},
        { en: "I returned a piece of clothing last month.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"上个月", py:"shàng gè yuè", en:"last month"},
          {hz:"退了", py:"tuì le", en:"returned"},
          {hz:"一件", py:"yí jiàn", en:"a"},
          {hz:"衣服。", py:"yīfu", en:"piece of clothing"}
        ]},
        { en: "The process was very simple.", words: [
          {hz:"过程", py:"guòchéng", en:"the process"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"简单。", py:"jiǎndān", en:"(was) simple"}
        ]},
        { en: "I feel online shopping has changed our lives.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"觉得", py:"juéde", en:"feel"},
          {hz:"网购", py:"wǎnggòu", en:"online shopping"},
          {hz:"改变了", py:"gǎibiàn le", en:"has changed"},
          {hz:"我们的", py:"wǒmen de", en:"our"},
          {hz:"生活。", py:"shēnghuó", en:"lives"}
        ]}
      ]
    },
    {
      id: "i14", level: "intermediate",
      title: { hz: "学开车", py: "Xué kāichē", en: "Learning to Drive" },
      description: "Nerves and progress at driving school.",
      sentences: [
        { en: "Recently I've been learning to drive.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"最近", py:"zuìjìn", en:"recently"},
          {hz:"在", py:"zài", en:"(am)"},
          {hz:"学", py:"xué", en:"learning"},
          {hz:"开车。", py:"kāichē", en:"(to) drive"}
        ]},
        { en: "I signed up at a driving school.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"报了", py:"bào le", en:"signed up at"},
          {hz:"一个", py:"yí gè", en:"a"},
          {hz:"驾校。", py:"jiàxiào", en:"driving school"}
        ]},
        { en: "The instructor is experienced and very patient.", words: [
          {hz:"老师", py:"lǎoshī", en:"the instructor"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"有", py:"yǒu", en:"has"},
          {hz:"经验,", py:"jīngyàn", en:"experience"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"耐心。", py:"nàixīn", en:"patient"}
        ]},
        { en: "The first time driving, I was really nervous.", words: [
          {hz:"第一次", py:"dì yī cì", en:"the first time"},
          {hz:"开车,", py:"kāichē", en:"driving"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"特别", py:"tèbié", en:"especially"},
          {hz:"紧张。", py:"jǐnzhāng", en:"(was) nervous"}
        ]},
        { en: "My hands kept shaking.", words: [
          {hz:"手", py:"shǒu", en:"hands"},
          {hz:"一直", py:"yìzhí", en:"continuously"},
          {hz:"发抖。", py:"fādǒu", en:"(kept) trembling"}
        ]},
        { en: "The instructor told me to relax.", words: [
          {hz:"老师", py:"lǎoshī", en:"the instructor"},
          {hz:"告诉", py:"gàosu", en:"told"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"要", py:"yào", en:"to"},
          {hz:"放松。", py:"fàngsōng", en:"relax"}
        ]},
        { en: "Slowly I got used to it.", words: [
          {hz:"慢慢", py:"mànmàn", en:"slowly"},
          {hz:"地", py:"de", en:"(adv.)"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"开始", py:"kāishǐ", en:"started"},
          {hz:"习惯了。", py:"xíguàn le", en:"(to) get used (to it)"}
        ]},
        { en: "Now I've been studying for two months already.", words: [
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"已经", py:"yǐjīng", en:"already"},
          {hz:"学了", py:"xué le", en:"studied"},
          {hz:"两", py:"liǎng", en:"two"},
          {hz:"个", py:"gè", en:"(measure)"},
          {hz:"月。", py:"yuè", en:"months"}
        ]},
        { en: "Next month is the test.", words: [
          {hz:"下个月", py:"xià gè yuè", en:"next month"},
          {hz:"要", py:"yào", en:"(will) have"},
          {hz:"考试。", py:"kǎoshì", en:"the test"}
        ]},
        { en: "If I pass, I can drive on the road.", words: [
          {hz:"如果", py:"rúguǒ", en:"if"},
          {hz:"考过,", py:"kǎo guò", en:"I pass"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"就", py:"jiù", en:"then"},
          {hz:"可以", py:"kěyǐ", en:"can"},
          {hz:"开车", py:"kāichē", en:"drive"},
          {hz:"上路。", py:"shàng lù", en:"on the road"}
        ]},
        { en: "I plan to buy a small car.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"打算", py:"dǎsuan", en:"plan"},
          {hz:"买", py:"mǎi", en:"to buy"},
          {hz:"一辆", py:"yí liàng", en:"a"},
          {hz:"小汽车。", py:"xiǎo qìchē", en:"small car"}
        ]},
        { en: "Having a car will make going out much easier.", words: [
          {hz:"有", py:"yǒu", en:"having"},
          {hz:"车", py:"chē", en:"a car"},
          {hz:"以后", py:"yǐhòu", en:"afterward"},
          {hz:"出门", py:"chūmén", en:"going out"},
          {hz:"会", py:"huì", en:"will"},
          {hz:"方便", py:"fāngbiàn", en:"be convenient"},
          {hz:"得多。", py:"de duō", en:"much (more)"}
        ]}
      ]
    },
    {
      id: "i15", level: "intermediate",
      title: { hz: "参加面试", py: "Cānjiā miànshì", en: "Going to a Job Interview" },
      description: "Waiting, questions, and a polite goodbye.",
      sentences: [
        { en: "Today I went to a company for an interview.", words: [
          {hz:"今天", py:"jīntiān", en:"today"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"去", py:"qù", en:"went to"},
          {hz:"一家", py:"yì jiā", en:"a"},
          {hz:"公司", py:"gōngsī", en:"company"},
          {hz:"面试。", py:"miànshì", en:"(for an) interview"}
        ]},
        { en: "I got up at seven.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"七点", py:"qī diǎn", en:"at seven"},
          {hz:"就", py:"jiù", en:"already"},
          {hz:"起床了。", py:"qǐchuáng le", en:"got up"}
        ]},
        { en: "I wore my best clothes.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"穿了", py:"chuān le", en:"wore"},
          {hz:"最好的", py:"zuì hǎo de", en:"my best"},
          {hz:"衣服。", py:"yīfu", en:"clothes"}
        ]},
        { en: "The interview location was a bit far from home.", words: [
          {hz:"面试的", py:"miànshì de", en:"the interview"},
          {hz:"地方", py:"dìfang", en:"location"},
          {hz:"离", py:"lí", en:"from"},
          {hz:"我家", py:"wǒ jiā", en:"my home"},
          {hz:"有点", py:"yǒu diǎn", en:"a little"},
          {hz:"远。", py:"yuǎn", en:"far"}
        ]},
        { en: "I left an hour early.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"提前", py:"tíqián", en:"in advance"},
          {hz:"一个", py:"yí gè", en:"one"},
          {hz:"小时", py:"xiǎoshí", en:"hour"},
          {hz:"出门。", py:"chūmén", en:"left home"}
        ]},
        { en: "At the company I waited ten minutes at the front desk.", words: [
          {hz:"到了", py:"dào le", en:"arrived at"},
          {hz:"公司,", py:"gōngsī", en:"the company"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"在", py:"zài", en:"at"},
          {hz:"前台", py:"qiántái", en:"the front desk"},
          {hz:"等了", py:"děng le", en:"waited"},
          {hz:"十", py:"shí", en:"ten"},
          {hz:"分钟。", py:"fēnzhōng", en:"minutes"}
        ]},
        { en: "Then the interviewer called me into the office.", words: [
          {hz:"然后", py:"ránhòu", en:"then"},
          {hz:"面试官", py:"miànshì guān", en:"the interviewer"},
          {hz:"叫", py:"jiào", en:"called"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"进", py:"jìn", en:"into"},
          {hz:"办公室。", py:"bàngōngshì", en:"the office"}
        ]},
        { en: "He asked me a lot of questions.", words: [
          {hz:"他", py:"tā", en:"he"},
          {hz:"问了", py:"wèn le", en:"asked"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"很多", py:"hěn duō", en:"a lot of"},
          {hz:"问题。", py:"wèntí", en:"questions"}
        ]},
        { en: "Some were harder to answer.", words: [
          {hz:"有些", py:"yǒu xiē", en:"some"},
          {hz:"问题", py:"wèntí", en:"questions"},
          {hz:"比较", py:"bǐjiào", en:"relatively"},
          {hz:"难", py:"nán", en:"hard"},
          {hz:"回答。", py:"huídá", en:"to answer"}
        ]},
        { en: "I tried to tell the truth.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"尽量", py:"jǐnliàng", en:"tried (as much as possible)"},
          {hz:"说", py:"shuō", en:"to tell"},
          {hz:"实话。", py:"shíhuà", en:"the truth"}
        ]},
        { en: "The interview lasted forty minutes in total.", words: [
          {hz:"面试", py:"miànshì", en:"the interview"},
          {hz:"一共", py:"yígòng", en:"in total"},
          {hz:"进行了", py:"jìnxíng le", en:"lasted"},
          {hz:"四十", py:"sìshí", en:"forty"},
          {hz:"分钟。", py:"fēnzhōng", en:"minutes"}
        ]},
        { en: "He said he'd let me know next week.", words: [
          {hz:"他", py:"tā", en:"he"},
          {hz:"说", py:"shuō", en:"said"},
          {hz:"下个星期", py:"xià gè xīngqī", en:"next week"},
          {hz:"给", py:"gěi", en:"will give"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"消息。", py:"xiāoxi", en:"news"}
        ]},
        { en: "I hope I get this job.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"希望", py:"xīwàng", en:"hope"},
          {hz:"能", py:"néng", en:"can"},
          {hz:"得到", py:"dé dào", en:"get"},
          {hz:"这份", py:"zhè fèn", en:"this"},
          {hz:"工作。", py:"gōngzuò", en:"job"}
        ]}
      ]
    },
    {
      id: "i16", level: "intermediate",
      title: { hz: "环保生活", py: "Huánbǎo shēnghuó", en: "An Eco-Friendly Life" },
      description: "Small habits that add up — water, bags, bikes.",
      sentences: [
        { en: "Protecting the environment is more and more important.", words: [
          {hz:"保护", py:"bǎohù", en:"protecting"},
          {hz:"环境", py:"huánjìng", en:"the environment"},
          {hz:"越来越", py:"yuè lái yuè", en:"more and more"},
          {hz:"重要。", py:"zhòngyào", en:"important"}
        ]},
        { en: "We should start from daily life.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"应该", py:"yīnggāi", en:"should"},
          {hz:"从", py:"cóng", en:"from"},
          {hz:"日常", py:"rìcháng", en:"daily"},
          {hz:"生活", py:"shēnghuó", en:"life"},
          {hz:"开始。", py:"kāishǐ", en:"start"}
        ]},
        { en: "For example, use fewer plastic bags.", words: [
          {hz:"比如,", py:"bǐrú", en:"for example"},
          {hz:"少", py:"shǎo", en:"less"},
          {hz:"用", py:"yòng", en:"use"},
          {hz:"塑料袋。", py:"sùliào dài", en:"plastic bags"}
        ]},
        { en: "Bring your own bag to the supermarket.", words: [
          {hz:"去", py:"qù", en:"when going to"},
          {hz:"超市的", py:"chāoshì de", en:"the supermarket"},
          {hz:"时候", py:"shíhou", en:"time"},
          {hz:"自己", py:"zìjǐ", en:"yourself"},
          {hz:"带", py:"dài", en:"bring"},
          {hz:"袋子。", py:"dàizi", en:"a bag"}
        ]},
        { en: "You can also save water.", words: [
          {hz:"也", py:"yě", en:"also"},
          {hz:"可以", py:"kěyǐ", en:"can"},
          {hz:"节约", py:"jiéyuē", en:"save"},
          {hz:"用水。", py:"yòng shuǐ", en:"using water"}
        ]},
        { en: "Turn off the faucet when brushing your teeth.", words: [
          {hz:"刷牙的", py:"shuā yá de", en:"brushing teeth"},
          {hz:"时候", py:"shíhou", en:"when"},
          {hz:"关", py:"guān", en:"turn off"},
          {hz:"水龙头。", py:"shuǐ lóngtóu", en:"the faucet"}
        ]},
        { en: "Turn off the lights when you go out.", words: [
          {hz:"出门的", py:"chūmén de", en:"going out"},
          {hz:"时候", py:"shíhou", en:"when"},
          {hz:"关", py:"guān", en:"turn off"},
          {hz:"灯。", py:"dēng", en:"the lights"}
        ]},
        { en: "If it's not far, walk or bike.", words: [
          {hz:"如果", py:"rúguǒ", en:"if"},
          {hz:"路", py:"lù", en:"the distance"},
          {hz:"不远,", py:"bù yuǎn", en:"isn't far"},
          {hz:"可以", py:"kěyǐ", en:"(you) can"},
          {hz:"走路", py:"zǒulù", en:"walk"},
          {hz:"或者", py:"huòzhě", en:"or"},
          {hz:"骑", py:"qí", en:"ride"},
          {hz:"自行车。", py:"zìxíngchē", en:"a bike"}
        ]},
        { en: "This is not only eco-friendly, but good for your body.", words: [
          {hz:"这样", py:"zhèyàng", en:"this way"},
          {hz:"不仅", py:"bùjǐn", en:"not only"},
          {hz:"环保,", py:"huánbǎo", en:"(is) eco-friendly"},
          {hz:"而且", py:"érqiě", en:"but also"},
          {hz:"对", py:"duì", en:"for"},
          {hz:"身体", py:"shēntǐ", en:"the body"},
          {hz:"好。", py:"hǎo", en:"(is) good"}
        ]},
        { en: "Many young people now have environmental awareness.", words: [
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"年轻人", py:"niánqīng rén", en:"young people"},
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"都", py:"dōu", en:"all"},
          {hz:"有", py:"yǒu", en:"have"},
          {hz:"环保", py:"huánbǎo", en:"environmental"},
          {hz:"意识。", py:"yìshi", en:"awareness"}
        ]},
        { en: "This is a good change.", words: [
          {hz:"这", py:"zhè", en:"this"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"一个", py:"yí gè", en:"a"},
          {hz:"好的", py:"hǎo de", en:"good"},
          {hz:"变化。", py:"biànhuà", en:"change"}
        ]},
        { en: "I believe the environment will keep getting better.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"相信", py:"xiāngxìn", en:"believe"},
          {hz:"环境", py:"huánjìng", en:"the environment"},
          {hz:"会", py:"huì", en:"will"},
          {hz:"越来越", py:"yuè lái yuè", en:"more and more"},
          {hz:"好。", py:"hǎo", en:"(get) better"}
        ]}
      ]
    },
    {
      id: "i17", level: "intermediate",
      title: { hz: "旅行计划", py: "Lǚxíng jìhuà", en: "Travel Plans" },
      description: "A week-long trip to Yunnan with friends.",
      sentences: [
        { en: "Next month I'm traveling to Yunnan.", words: [
          {hz:"下个月", py:"xià gè yuè", en:"next month"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"要", py:"yào", en:"(am) going"},
          {hz:"去", py:"qù", en:"to"},
          {hz:"云南", py:"Yúnnán", en:"Yunnan"},
          {hz:"旅行。", py:"lǚxíng", en:"travel"}
        ]},
        { en: "This is my first time in Yunnan.", words: [
          {hz:"这", py:"zhè", en:"this"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"第一次", py:"dì yī cì", en:"first time"},
          {hz:"去", py:"qù", en:"going to"},
          {hz:"云南。", py:"Yúnnán", en:"Yunnan"}
        ]},
        { en: "I hear the scenery there is really beautiful.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"听说", py:"tīngshuō", en:"(have) heard"},
          {hz:"那里", py:"nàli", en:"there"},
          {hz:"风景", py:"fēngjǐng", en:"the scenery"},
          {hz:"特别", py:"tèbié", en:"especially"},
          {hz:"美。", py:"měi", en:"beautiful"}
        ]},
        { en: "I'm going with two friends.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"和", py:"hé", en:"with"},
          {hz:"两个", py:"liǎng gè", en:"two"},
          {hz:"朋友", py:"péngyou", en:"friends"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"去。", py:"qù", en:"go"}
        ]},
        { en: "We've already booked flights and hotels.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"已经", py:"yǐjīng", en:"already"},
          {hz:"订了", py:"dìng le", en:"booked"},
          {hz:"机票", py:"jīpiào", en:"flights"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"酒店。", py:"jiǔdiàn", en:"hotels"}
        ]},
        { en: "We're going for seven days.", words: [
          {hz:"一共", py:"yígòng", en:"altogether"},
          {hz:"去", py:"qù", en:"going"},
          {hz:"七", py:"qī", en:"seven"},
          {hz:"天。", py:"tiān", en:"days"}
        ]},
        { en: "We plan to go to Kunming first.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"打算", py:"dǎsuan", en:"plan"},
          {hz:"先", py:"xiān", en:"first"},
          {hz:"去", py:"qù", en:"to go to"},
          {hz:"昆明。", py:"Kūnmíng", en:"Kunming"}
        ]},
        { en: "Then to Dali and Lijiang.", words: [
          {hz:"然后", py:"ránhòu", en:"then"},
          {hz:"去", py:"qù", en:"to"},
          {hz:"大理", py:"Dàlǐ", en:"Dali"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"丽江。", py:"Lìjiāng", en:"Lijiang"}
        ]},
        { en: "There are many ethnic minorities there.", words: [
          {hz:"那里", py:"nàli", en:"there"},
          {hz:"有", py:"yǒu", en:"(there) are"},
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"少数民族。", py:"shǎoshù mínzú", en:"ethnic minorities"}
        ]},
        { en: "I want to try the local food.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"想", py:"xiǎng", en:"want"},
          {hz:"尝一尝", py:"cháng yi cháng", en:"to try"},
          {hz:"当地的", py:"dāngdì de", en:"the local"},
          {hz:"菜。", py:"cài", en:"food"}
        ]},
        { en: "I'll also take lots of photos.", words: [
          {hz:"也", py:"yě", en:"also"},
          {hz:"要", py:"yào", en:"will"},
          {hz:"拍", py:"pāi", en:"take"},
          {hz:"很多", py:"hěn duō", en:"lots of"},
          {hz:"照片。", py:"zhàopiàn", en:"photos"}
        ]},
        { en: "I've already started packing.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"已经", py:"yǐjīng", en:"already"},
          {hz:"开始", py:"kāishǐ", en:"started"},
          {hz:"收拾", py:"shōushi", en:"packing"},
          {hz:"行李", py:"xíngli", en:"luggage"},
          {hz:"了。", py:"le", en:"(now)"}
        ]}
      ]
    },
    {
      id: "i18", level: "intermediate",
      title: { hz: "健身习惯", py: "Jiànshēn xíguàn", en: "A Fitness Habit" },
      description: "From frequent colds to the gym three times a week.",
      sentences: [
        { en: "Two years ago my body wasn't so great.", words: [
          {hz:"两年前,", py:"liǎng nián qián", en:"two years ago"},
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"身体", py:"shēntǐ", en:"body"},
          {hz:"不太", py:"bú tài", en:"wasn't too"},
          {hz:"好。", py:"hǎo", en:"good"}
        ]},
        { en: "I often caught colds and got tired easily.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"经常", py:"jīngcháng", en:"often"},
          {hz:"感冒,", py:"gǎnmào", en:"caught colds"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"容易", py:"róngyì", en:"easily"},
          {hz:"累。", py:"lèi", en:"(got) tired"}
        ]},
        { en: "Later, I decided to start exercising.", words: [
          {hz:"后来,", py:"hòulái", en:"later"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"决定", py:"juédìng", en:"decided"},
          {hz:"开始", py:"kāishǐ", en:"to start"},
          {hz:"运动。", py:"yùndòng", en:"exercising"}
        ]},
        { en: "At first I just walked every day.", words: [
          {hz:"一开始", py:"yī kāishǐ", en:"at first"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"只是", py:"zhǐ shì", en:"just"},
          {hz:"每天", py:"měitiān", en:"every day"},
          {hz:"走路。", py:"zǒulù", en:"walked"}
        ]},
        { en: "Gradually I started jogging.", words: [
          {hz:"慢慢", py:"mànmàn", en:"slowly"},
          {hz:"地,", py:"de", en:"(adv.)"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"开始", py:"kāishǐ", en:"started"},
          {hz:"跑步。", py:"pǎobù", en:"jogging"}
        ]},
        { en: "Now I go to the gym three times a week.", words: [
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"每周", py:"měi zhōu", en:"every week"},
          {hz:"去", py:"qù", en:"go"},
          {hz:"三次", py:"sān cì", en:"three times"},
          {hz:"健身房。", py:"jiànshēn fáng", en:"to the gym"}
        ]},
        { en: "I also pay attention to my diet.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"注意", py:"zhùyì", en:"pay attention to"},
          {hz:"饮食。", py:"yǐnshí", en:"(my) diet"}
        ]},
        { en: "Less oily food, more vegetables and fruit.", words: [
          {hz:"少", py:"shǎo", en:"less"},
          {hz:"吃", py:"chī", en:"eating"},
          {hz:"油腻的", py:"yóunì de", en:"greasy"},
          {hz:"东西,", py:"dōngxi", en:"things"},
          {hz:"多", py:"duō", en:"more"},
          {hz:"吃", py:"chī", en:"eating"},
          {hz:"蔬菜", py:"shūcài", en:"vegetables"},
          {hz:"水果。", py:"shuǐguǒ", en:"(and) fruit"}
        ]},
        { en: "I've also learned to make some healthy meals.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"还", py:"hái", en:"also"},
          {hz:"学会了", py:"xuéhuì le", en:"learned"},
          {hz:"做", py:"zuò", en:"to make"},
          {hz:"一些", py:"yìxiē", en:"some"},
          {hz:"健康的", py:"jiànkāng de", en:"healthy"},
          {hz:"饭菜。", py:"fàncài", en:"meals"}
        ]},
        { en: "After sticking with exercise, my body is much better.", words: [
          {hz:"坚持", py:"jiānchí", en:"persisting with"},
          {hz:"运动", py:"yùndòng", en:"exercise"},
          {hz:"以后,", py:"yǐhòu", en:"after"},
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"身体", py:"shēntǐ", en:"body"},
          {hz:"好多了。", py:"hǎo duō le", en:"(is) much better"}
        ]},
        { en: "I have more energy.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"变得", py:"biàn de", en:"have become"},
          {hz:"更", py:"gèng", en:"more"},
          {hz:"有", py:"yǒu", en:"have"},
          {hz:"精神。", py:"jīngshén", en:"energy"}
        ]},
        { en: "Fitness has become a part of my life.", words: [
          {hz:"健身", py:"jiànshēn", en:"fitness"},
          {hz:"已经", py:"yǐjīng", en:"already"},
          {hz:"成为", py:"chéngwéi", en:"has become"},
          {hz:"我", py:"wǒ", en:"my"},
          {hz:"生活", py:"shēnghuó", en:"life"},
          {hz:"的", py:"de", en:"'s"},
          {hz:"一部分。", py:"yí bùfèn", en:"a part"}
        ]}
      ]
    },
    {
      id: "i19", level: "intermediate",
      title: { hz: "我的梦想", py: "Wǒ de mèngxiǎng", en: "My Dream" },
      description: "Opening a quiet café someday.",
      sentences: [
        { en: "As a kid I had many dreams.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"小时候", py:"xiǎo shíhou", en:"as a kid"},
          {hz:"有", py:"yǒu", en:"had"},
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"梦想。", py:"mèngxiǎng", en:"dreams"}
        ]},
        { en: "I wanted to be a doctor and also a teacher.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"想", py:"xiǎng", en:"wanted"},
          {hz:"当", py:"dāng", en:"to be"},
          {hz:"医生,", py:"yīshēng", en:"a doctor"},
          {hz:"也", py:"yě", en:"also"},
          {hz:"想", py:"xiǎng", en:"wanted"},
          {hz:"当", py:"dāng", en:"to be"},
          {hz:"老师。", py:"lǎoshī", en:"a teacher"}
        ]},
        { en: "When I grew up, my dream changed.", words: [
          {hz:"长大", py:"zhǎng dà", en:"grow up"},
          {hz:"了", py:"le", en:"(perfective)"},
          {hz:"以后,", py:"yǐhòu", en:"after"},
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"梦想", py:"mèngxiǎng", en:"dream"},
          {hz:"变了。", py:"biàn le", en:"changed"}
        ]},
        { en: "Now I want to open a small café.", words: [
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"想", py:"xiǎng", en:"want"},
          {hz:"开", py:"kāi", en:"to open"},
          {hz:"一家", py:"yì jiā", en:"a"},
          {hz:"小", py:"xiǎo", en:"small"},
          {hz:"咖啡店。", py:"kāfēi diàn", en:"café"}
        ]},
        { en: "A quiet and comfortable place.", words: [
          {hz:"一个", py:"yí gè", en:"a"},
          {hz:"安静", py:"ānjìng", en:"quiet"},
          {hz:"又", py:"yòu", en:"and"},
          {hz:"舒服的", py:"shūfu de", en:"comfortable"},
          {hz:"地方。", py:"dìfang", en:"place"}
        ]},
        { en: "Where customers can read and chat.", words: [
          {hz:"客人", py:"kèrén", en:"customers"},
          {hz:"可以", py:"kěyǐ", en:"can"},
          {hz:"在", py:"zài", en:"at"},
          {hz:"那里", py:"nàli", en:"there"},
          {hz:"看书、", py:"kànshū", en:"read"},
          {hz:"聊天。", py:"liáotiān", en:"chat"}
        ]},
        { en: "I want to make the coffee and cakes myself.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"想", py:"xiǎng", en:"want"},
          {hz:"自己", py:"zìjǐ", en:"myself"},
          {hz:"做", py:"zuò", en:"(to) make"},
          {hz:"咖啡", py:"kāfēi", en:"coffee"},
          {hz:"和", py:"hé", en:"and"},
          {hz:"蛋糕。", py:"dàngāo", en:"cakes"}
        ]},
        { en: "I know it's not easy.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"知道", py:"zhīdào", en:"know"},
          {hz:"这", py:"zhè", en:"this"},
          {hz:"不", py:"bù", en:"isn't"},
          {hz:"容易。", py:"róngyì", en:"easy"}
        ]},
        { en: "I need to learn a lot.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"需要", py:"xūyào", en:"need to"},
          {hz:"学", py:"xué", en:"learn"},
          {hz:"很多", py:"hěn duō", en:"many"},
          {hz:"东西。", py:"dōngxi", en:"things"}
        ]},
        { en: "I also need a lot of money.", words: [
          {hz:"也", py:"yě", en:"also"},
          {hz:"需要", py:"xūyào", en:"need"},
          {hz:"很多", py:"hěn duō", en:"a lot of"},
          {hz:"钱。", py:"qián", en:"money"}
        ]},
        { en: "So now I work hard and save carefully.", words: [
          {hz:"所以", py:"suǒyǐ", en:"so"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"现在", py:"xiànzài", en:"now"},
          {hz:"努力", py:"nǔlì", en:"(work) hard"},
          {hz:"工作,", py:"gōngzuò", en:"work"},
          {hz:"努力", py:"nǔlì", en:"work hard"},
          {hz:"存钱。", py:"cún qián", en:"(to) save money"}
        ]},
        { en: "I believe one day I'll make this dream real.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"相信", py:"xiāngxìn", en:"believe"},
          {hz:"总有一天", py:"zǒng yǒu yì tiān", en:"one day"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"能", py:"néng", en:"(will) be able"},
          {hz:"实现", py:"shíxiàn", en:"to realize"},
          {hz:"这个", py:"zhè gè", en:"this"},
          {hz:"梦想。", py:"mèngxiǎng", en:"dream"}
        ]}
      ]
    },
    {
      id: "i20", level: "intermediate",
      title: { hz: "春节回家", py: "Chūnjié huí jiā", en: "Spring Festival Homecoming" },
      description: "The long train ride home for the most important holiday.",
      sentences: [
        { en: "Spring Festival is China's most important holiday.", words: [
          {hz:"春节", py:"Chūnjié", en:"Spring Festival"},
          {hz:"是", py:"shì", en:"is"},
          {hz:"中国", py:"Zhōngguó", en:"China"},
          {hz:"最", py:"zuì", en:"most"},
          {hz:"重要的", py:"zhòngyào de", en:"important"},
          {hz:"节日。", py:"jiérì", en:"holiday"}
        ]},
        { en: "Every Spring Festival I go back to my hometown.", words: [
          {hz:"每年", py:"měi nián", en:"every year"},
          {hz:"春节,", py:"Chūnjié", en:"Spring Festival"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"都", py:"dōu", en:"always"},
          {hz:"回", py:"huí", en:"return to"},
          {hz:"老家。", py:"lǎojiā", en:"my hometown"}
        ]},
        { en: "My home is in a small city in the south.", words: [
          {hz:"我的", py:"wǒ de", en:"my"},
          {hz:"家", py:"jiā", en:"home"},
          {hz:"在", py:"zài", en:"is in"},
          {hz:"南方的", py:"nánfāng de", en:"the south's"},
          {hz:"一个", py:"yí gè", en:"a"},
          {hz:"小", py:"xiǎo", en:"small"},
          {hz:"城市。", py:"chéngshì", en:"city"}
        ]},
        { en: "The train takes more than ten hours.", words: [
          {hz:"坐", py:"zuò", en:"taking"},
          {hz:"火车", py:"huǒchē", en:"the train"},
          {hz:"要", py:"yào", en:"takes"},
          {hz:"十几", py:"shí jǐ", en:"more than ten"},
          {hz:"个", py:"gè", en:"(measure)"},
          {hz:"小时。", py:"xiǎoshí", en:"hours"}
        ]},
        { en: "Train tickets are hard to get.", words: [
          {hz:"火车票", py:"huǒchē piào", en:"train tickets"},
          {hz:"很", py:"hěn", en:"very"},
          {hz:"难", py:"nán", en:"hard"},
          {hz:"买。", py:"mǎi", en:"to buy"}
        ]},
        { en: "But I definitely have to go home.", words: [
          {hz:"但是", py:"dànshì", en:"but"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"一定", py:"yídìng", en:"definitely"},
          {hz:"要", py:"yào", en:"must"},
          {hz:"回家。", py:"huí jiā", en:"go home"}
        ]},
        { en: "On New Year's Eve the whole family eats together.", words: [
          {hz:"除夕", py:"chúxī", en:"New Year's Eve"},
          {hz:"晚上,", py:"wǎnshang", en:"evening"},
          {hz:"全家人", py:"quán jiā rén", en:"the whole family"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"吃饭。", py:"chī fàn", en:"eats"}
        ]},
        { en: "Mom prepares a lot of delicious food.", words: [
          {hz:"妈妈", py:"māma", en:"mom"},
          {hz:"准备了", py:"zhǔnbèi le", en:"prepares"},
          {hz:"很多", py:"hěn duō", en:"a lot of"},
          {hz:"好吃的。", py:"hǎo chī de", en:"delicious food"}
        ]},
        { en: "We eat and watch TV at the same time.", words: [
          {hz:"我们", py:"wǒmen", en:"we"},
          {hz:"一边", py:"yìbiān", en:"(at the same time)"},
          {hz:"吃饭,", py:"chī fàn", en:"eat"},
          {hz:"一边", py:"yìbiān", en:"(and)"},
          {hz:"看", py:"kàn", en:"watch"},
          {hz:"电视。", py:"diànshì", en:"TV"}
        ]},
        { en: "At midnight fireworks start outside.", words: [
          {hz:"十二点的", py:"shí èr diǎn de", en:"twelve o'clock's"},
          {hz:"时候,", py:"shíhou", en:"time"},
          {hz:"外面", py:"wàimiàn", en:"outside"},
          {hz:"开始", py:"kāishǐ", en:"starts"},
          {hz:"放", py:"fàng", en:"setting off"},
          {hz:"烟花。", py:"yānhuā", en:"fireworks"}
        ]},
        { en: "I wish my grandparents a happy new year.", words: [
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"给", py:"gěi", en:"to"},
          {hz:"爷爷", py:"yéye", en:"grandpa"},
          {hz:"奶奶", py:"nǎinai", en:"grandma"},
          {hz:"拜年。", py:"bàinián", en:"give new-year greetings"}
        ]},
        { en: "They give me red envelopes.", words: [
          {hz:"他们", py:"tāmen", en:"they"},
          {hz:"给", py:"gěi", en:"give"},
          {hz:"我", py:"wǒ", en:"me"},
          {hz:"红包。", py:"hóngbāo", en:"red envelopes"}
        ]},
        { en: "Celebrating with family feels like the greatest happiness.", words: [
          {hz:"和", py:"hé", en:"with"},
          {hz:"家人", py:"jiārén", en:"family"},
          {hz:"一起", py:"yìqǐ", en:"together"},
          {hz:"过年,", py:"guònián", en:"celebrating the new year"},
          {hz:"我", py:"wǒ", en:"I"},
          {hz:"觉得", py:"juéde", en:"feel"},
          {hz:"最", py:"zuì", en:"the most"},
          {hz:"幸福。", py:"xìngfú", en:"happy"}
        ]}
      ]
    }
  ];

  if (typeof window !== "undefined" && Array.isArray(window.STORIES)) {
    window.STORIES.push(...extra);
  }
})();
