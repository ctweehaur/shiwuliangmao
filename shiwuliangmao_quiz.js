const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，加点字“恶”的正确发音和含义是？",
        py: "xià liè jù zǐ zhōng jiā diǎn zì wù de zhèng què fā yīn hé hán yì shì",
        en: "What is the correct pronunciation and meaning of '恶' in 'mǒu wù shǔ'?",
        options: [
            {
                text: "发音为 è，指老鼠长得很凶恶、丑陋",
                py: "fā yīn wéi è zhǐ lǎo shǔ zhǎng dé hěn xiōng è chǒu lòu",
                en: "Pronounced 'è', meaning the rats looked ferocious and ugly.",
                correct: false,
                explanation: "错误。在这个语境中“恶”是动词，作讨厌、痛恨讲，不能读作恶劣的恶。",
                explanationPy: "cuò wù zài zhè gè yǔ jìng zhōng wù shì dòng cí zuò tǎo yàn tòng hèn jiǎng bù néng dú zuò è liè de è",
                explanationEn: "Incorrect. In this context, 'wù' functions as a verb meaning to detest or hate, not 'è' (ferocious)."
            },
            {
                text: "发音为 wù，动词，讨厌、痛恨、厌恶",
                py: "fā yīn wéi wù dòng cí tǎo yàn tòng hèn yàn wù",
                en: "Pronounced 'wù', a verb meaning to detest, hate, or loathe.",
                correct: true,
                explanation: "正确！“某恶鼠”指的是某个人非常讨厌、痛恨家里出没的老鼠。",
                explanationPy: "zhèng què mǒu wù shǔ zhǐ de mǒu gè rén fēi cháng tǎo yàn tòng hèn jiā lǐ chū mò de lǎo shǔ",
                explanationEn: "Correct! 'Mǒu wù shǔ' means a certain person deeply detested and hated the rats roaming in his house."
            },
            {
                text: "发音为 ě，指看到老鼠觉得恶心、想吐",
                py: "fā yīn wéi ě zhǐ kàn dào lǎo shǔ jué dé ě xīn xiǎng tǔ",
                en: "Pronounced 'ě', meaning feeling nauseous or sick upon seeing rats.",
                correct: false,
                explanation: "错误。恶心想吐是现代汉语的口语搭配，不符合古汉语实词的核心法度。",
                explanationPy: "cuò wù ě xīn xiǎng tǔ xiàn dài hàn yǔ de kǒu yǔ dā pèi bù fú hé gǔ hàn yǔ shí cí de hé xīn fǎ dù",
                explanationEn: "Incorrect. Nausea is a modern colloquial definition, which does not fit the classical Chinese usage here."
            },
            {
                text: "发音为 wū，疑问代词，表示哪里、怎么",
                py: "fā yīn wéi wū yí wèn dài cí biǎo nǎ lǐ zěn me",
                en: "Pronounced 'wū', an interrogative pronoun meaning 'where' or 'how'.",
                correct: false,
                explanation: "错误。虽然“恶”在句首可以充当疑问代词（如恶能），但在句中紧跟主语后显然是动词谓语。",
                explanationPy: "cuò wù suī rán wù zài jù shǒu kě yǐ chōng dāng yí wèn dài cí zài jù zhōng jǐn gēn zhǔ yǔ hòu xiǎn rán shì dòng cí wèi yǔ",
                explanationEn: "Incorrect. Although 'wū' can be an interrogative pronoun at a sentence start, here it follows the subject as a main verb."
            }
        ]
    },
    {
        id: 2,
        text: "对文中句子“厌以腥膏”中“厌”字的解析，最准确的是？",
        py: "duì wén zhāng zhōng jù zǐ yàn yǐ xīng gāo zhōng yàn zì de jiě xī zuì zhǔn quě de shì",
        en: "Which analysis best explains the character 'yàn' in 'yàn yǐ xīng gāo'?",
        options: [
            {
                text: "心理上感到厌烦、讨厌吃肉",
                py: "xīn lǐ shàng gǎn dào yàn fán tǎo yàn chī ròu",
                en: "Feeling mentally tired or annoyed of eating meat.",
                correct: false,
                explanation: "错误。主人是为了宠爱猫，不可能让猫对食物产生心理厌烦。",
                explanationPy: "cuò wù zhǔ rén wèi le chǒng ào māo bù kě néng māo duì shí wù chǎn shēng xīn lǐ yàn fán",
                explanationEn: "Incorrect. The owner pampered the cat immensely, so it was not a matter of the cat feeling annoyed by food."
            },
            {
                text: "通假字，同“餍”，意思是使……饱食、喂饱",
                py: "tōng jiǎ zì tóng yàn yì si shì shǐ bǎo shí wèi bǎo",
                en: "A phonetic loan character for '餍', meaning to feed to repletion.",
                correct: true,
                explanation: "正确！“厌以腥膏”是倒装句，意思就是每天用大量的肥肉和鲜鱼去把猫给喂得饱饱的。",
                explanationPy: "zhèng què yàn yǐ xīng gāo shì dào zhuāng jù yì si jiù tiān tiān yòng dà liàng de féi ròu hé xiān yú qù bǎ māo gěi wèi dé bǎo bǎo de",
                explanationEn: "Correct! It is a loan word for 'yàn' (餍), meaning to overfeed. The owner stuffed the cat with endless rich meats daily."
            },
            {
                text: "指食物坏掉、腐烂发出的腥臭味",
                py: "zhǐ shí wù huài diào fǔ làn fā chū de xīng chòu wèi",
                en: "Referring to the putrid smell of spoiled or rotten food.",
                correct: false,
                explanation: "错误。属于望文生义地猜测“腥膏”带来的感官错觉。",
                explanationPy: "cuò wù shǔ yú wàng wén shēng yì de cāi cè xīng gāo chǎn shēng de gǎn guān cuò jué",
                explanationEn: "Incorrect. This represents a literal guess based purely on the raw components of the food description."
            },
            {
                text: "满足，指满足了主人的虚荣心",
                py: "mǎn zú zhǐ mǎn zú le zhǔ rén de xū róng xīn",
                en: "Satisfy, meaning satisfying the owner's vanity.",
                correct: false,
                explanation: "错误。虽然“厌”有满足之意（如贪得无厌），但在修饰具体食物时特指饱食。",
                explanationPy: "cuò wù suī rán yàn mǎn zú zhī yì zài xiū shì jù tǐ shí wù shí tè zhǐ bǎo shí",
                explanationEn: "Incorrect. While 'yàn' can mean satisfaction in general contexts, it specifically means overfeeding when applied to meals."
            }
        ]
    },
    {
        id: 3,
        text: "猫买回家后“率不捕鼠”，导致这种结果的根本原因是？",
        py: "māo mǎi huí jiā hòu shuài bù bǔ shǔ dǎo zhì zhè zhǒng jié guǒ de gēn běn yuán yīn shì",
        en: "What was the root cause behind the cat's total refusal to hunt after being bought?",
        options: [
            {
                text: "猫的胆子太小，害怕凶猛的大老鼠",
                py: "māo de dǎn zǐ tài xiǎo hài pà xiōng měng de dà lǎo shǔ",
                en: "The cat was too cowardly and feared large, aggressive rats.",
                correct: false,
                explanation: "错误。猫后来甚至跟老鼠开心嬉戏（与鼠游戏），足见它完全不怕老鼠。",
                explanationPy: "cuò wù māo hòu lái shèn zhì gēn lǎo shǔ kāi xīn xī xì zú jiàn tā wán quán bú pà lǎo shǔ",
                explanationEn: "Incorrect. The cat later played casually with the rats (yǔ shǔ yóu xì), proving it harbored zero fear toward them."
            },
            {
                text: "主人提供了极度安逸、饱食终日的环境，直接消磨掉了猫的捕鼠猎食天性",
                py: "zhǔ rén tí gōng le jí dù ān yì bǎo shí zhōng rì de huán jìng zhí jiē xiāo mó diào le māo de bǔ shǔ liè shí tiān xìng",
                en: "The owner provided excessive luxury and constant repletion, ruining the cat's natural hunting drive.",
                correct: true,
                explanation: "正确！文中指出“猫既饱且安”，猫整天不愁吃喝、生活太舒服，就彻底丧失了捕鼠的生存原动力。",
                explanationPy: "zhèng què wén zhāng zhōng zhǐ chū māo jì bǎo qiě ān māo zhěng tiān bù chóu chī hē shēng huó tài shū fú jiù chè dǐ shàng shī le bǔ shǔ de shēng cún yuán dòng lì",
                explanationEn: "Correct! The text highlights 'māo jì bǎo qiě ān.' Absolute over-feeding and a luxury environment drained its drive to hunt."
            },
            {
                text: "这只猫生病了，手脚酥软完全跑不动",
                py: "zhè zhī māo shēng bìng le shǒu jiǎo sū ruǎn wán quán pǎo bú dòng",
                en: "The cat fell ill and lacked the physical capacity to move.",
                correct: false,
                explanation: "错误。文中没有提及任何疾病描述，它是健康且肥胖安逸的。",
                explanationPy: "cuò wù wén zhāng zhōng méi tí jí rèn hé jí bìng miáo shù tā jiàn kāng qiě féi pàng ān yì de",
                explanationEn: "Incorrect. There is no mention of illness anywhere; the cat was perfectly healthy but completely pampered."
            },
            {
                text: "主人买到了一只假猫，它根本就不是捕鼠品种",
                py: "zhǔ rén mǎi dào le yī zhī jiǎ māo tā gēn běn jiù bú bǔ shǔ pǐn zhǒng",
                en: "The owner purchased a fake cat that wasn't a standard mousing breed.",
                correct: false,
                explanation: "错误。主人“破家求良猫”，买到的确实是优秀的品种，退化纯粹是后天环境溺爱导致的。",
                explanationPy: "cuò wù zhǔ rén pò jiā qù qiú liáng māo mǎi dào de què shí yōu xiù de pǐn zhǒng tuì huà chún cuì hòu tiān huán jìng nì ài dǎo zhì de",
                explanationEn: "Incorrect. The owner spent a fortune to secure an excellent breed; its decay was entirely due to subsequent pampering."
            }
        ]
    },
    {
        id: 4,
        text: "老鼠最后“以故益暴”，其中“以故”在文中的正确含义是？",
        py: "lǎo shǔ zuì hòu yǐ gù yì bào qí zhōng yǐ gù zài wén zhāng zhōng de zhèng què hán yì shì",
        en: "The rats became 'yǐ gù yǐ bào'. What does the phrase 'yǐ gù' mean here?",
        options: [
            {
                text: "故意、特意去挑衅主人",
                py: "gù yì tè yì qù tiǎo xìn zhǔ rén",
                en: "Intentionally / purposefully mocking the owner.",
                correct: false,
                explanation: "错误。在古汉语中，“以故”是一个固定的因果复合结构，不代表故意的心理主观。",
                explanationPy: "cuò wù zài gǔ dài hàn yǔ zhōng yǐ gù yī gè gù dìng de yīn guǒ fù hé jié gòu bú biǎo gù yì de xīn lǐ zhǔ guān",
                explanationEn: "Incorrect. In classical syntax, 'yǐ gù' is a structural causal connective, not an adverb meaning intentionally."
            },
            {
                text: "因为这个缘故、因此",
                py: "yīn wèi zhè gè yuán gù yīn cǐ",
                en: "Because of this reason / therefore.",
                correct: true,
                explanation: "正确！“以故益暴”指的就是老鼠看到连猫都不抓它们、反而和它们玩耍，因为这个缘故就更加猖獗（益暴）了。",
                explanationPy: "zhèng què yǐ gù yì bào zhǐ de jiù lǎo shǔ kàn dào lián māo dōu bù zhuā tā men fǎn ér yǔ tā men wán shuǎ yīn wèi zhè gè yuán gù jiù gèng jiā chāng jué le",
                explanationEn: "Correct! It means 'because of this reason.' Seeing that the cat offered no threat, the rats became even more rampant."
            },
            {
                text: "讲述过去古老的故事",
                py: "jiǎn shù guò qù gǔ lǎo de gù shì",
                en: "Narrating old historical folklore tales.",
                correct: false,
                explanation: "错误。属于把“故”死板当成“故事”的荒唐拆字瞎猜。",
                explanationPy: "cuò wù shǔ yú bǎ gù sǐ bǎn dàng chéng gù shì de huāng táng chāi zì xiā cāi",
                explanationEn: "Incorrect. This is an ungrounded guess that takes 'gù' literally as 'gù shì' (stories), breaking the syntax."
            },
            {
                text: "因为老鼠们全都是老相识了",
                py: "yīn wèi lǎo shǔ men quán dōu lǎo xiāng shí le",
                en: "Because the rats were all old acquaintances.",
                correct: false,
                explanation: "错误。完全不符合文言语境的因果推导。",
                explanationPy: "cuò wù wán quán bù fú hé wén yán yǔ jìng de yīn guǒ tuī dǎo",
                explanationEn: "Incorrect. This interpretation is entirely out of line with the logical flow and meaning of the fable."
            }
        ]
    },
    {
        id: 5,
        text: "主人最后断定“天下无良猫也”，他犯了什么严重的思维逻辑缺陷？",
        py: "zhǔ rén zuì hòu duàn dìng tiān xià wú liáng māo yě tā fàn le shén me yán zhòng de sī wéi luó jí quē xiàn shì",
        en: "The owner concluded that 'there are no good cats in the world.' What structural cognitive flaw did he commit?",
        options: [
            {
                text: "性格太残暴，缺乏对弱小动物的爱心",
                py: "xìng gé tài cán bào quē fá duì ruò xiǎo dòng wù de ài xīn",
                en: "Being too cruel and lacking empathy for small animals.",
                correct: false,
                explanation: "错误。他前期对猫甚至过于溺爱，逻辑缺陷在于他的片面主观判断，而非缺乏爱心。",
                explanationPy: "cuò wù tā qián qī duì māo shèn zhì guò yú nì ài luó jí quē xiàn zài tā de piàn miàn zhǔ guān pàn duàn ér fēi quē fá ài xīn",
                explanationEn: "Incorrect. He actually pampered the cat excessively at first; his flaw is a logical over-generalization, not cruelty."
            },
            {
                text: "以偏概全、把自身错误导致的个别恶果全盘推卸给整个外部世界",
                py: "yǐ piān gài quán bǎ zì shēn cuò wù dǎo zhì de gè bié è guǒ quán pán tuī xiè gěi zhěng gè wài bù shì jiè",
                en: "Over-generalizing and projecting the failure of his own making onto the entire external world.",
                correct: true,
                explanation: "正确！明明是他自己用不合理的溺爱方式把好猫给养废了，却不反省自己，反而武断认定天下没有好猫，典型的推卸责任与盲目主观主义。",
                explanationPy: "zhèng què míng míng tā zì jǐ yòng bù hé lǐ de nì ài fāng shì bǎ hǎo māo gěi yǎng fèi le què bù fǎn xǐng zì jǐ fǎn ér wǔ duàn rèn dìng tiān xià méi yǒu hǎo māo diǎn xíng de tuī xiè zé rèn yǔ máng mù zhǔ guān zhǔ yì",
                explanationEn: "Correct! He ruined an excellent cat via indulgence but deflected blame onto the world, drawing a sweeping conclusion."
            },
            {
                text: "没有继续花更多的钱去买更贵、更高级的猫",
                py: "méi yǒu jì xù huā gèng duō de qián qù mǎi gèng guì gèng gāo jí de māo",
                en: "Failing to spend even more money to buy a premium luxury cat.",
                correct: false,
                explanation: "错误。钱多并不能解决方法上的错误，思维缺陷在于认知层面。",
                explanationPy: "cuò wù qián duō bìng jiě jué fāng fǎ shàng de cuò wù sī wéi quē xiàn zài rèn zhī céng miàn",
                explanationEn: "Incorrect. Splurging more money does not correct structural flaws in training; his mistake is purely cognitive."
            },
            {
                text: "不应该在中途放弃，应该把老鼠和猫隔离开来养",
                py: "bù yīng gāi zài zhōng tú fàng qì yīng gāi bǎ lǎo shǔ hé māo gé lí kāi lái yǎng",
                en: "Should not have given up halfway; should have quarantined the rats from the cat.",
                correct: false,
                explanation: "错误。猫买回来就是为了抓老鼠的，隔离养完全违背了养猫的核心功能需求。",
                explanationPy: "cuò wù māo mǎi huí lái jiù wèi le zhuā lǎo shǔ de gé lí yǎng wán quán wéi bèi yǎng māo de hé xīn gōng néng xū qiú",
                explanationEn: "Incorrect. Cats are kept precisely to catch rats; isolating them runs completely counter to the mouser's core function."
            }
        ]
    }
];
