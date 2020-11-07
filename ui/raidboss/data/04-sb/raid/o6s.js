'use strict';

// O6S - Sigmascape 2.0 Savage
[{
  zoneId: ZoneId.SigmascapeV20Savage,
  timelineFile: 'o6s.txt',
  triggers: [
    {
      id: 'O6S Demonic Shear',
      netRegex: NetRegexes.startsUsing({ id: '2829', source: 'Demon Chadarnook' }),
      netRegexDe: NetRegexes.startsUsing({ id: '2829', source: 'Gefallen(?:e|er|es|en) Chadarnook' }),
      netRegexFr: NetRegexes.startsUsing({ id: '2829', source: 'Démon Chadarnouk' }),
      netRegexJa: NetRegexes.startsUsing({ id: '2829', source: 'チャダルヌーク・デーモン' }),
      netRegexCn: NetRegexes.startsUsing({ id: '2829', source: '恶魔查达奴克' }),
      netRegexKo: NetRegexes.startsUsing({ id: '2829', source: '차다르누크 악령' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'O6S Storms Grip',
      netRegex: NetRegexes.addedCombatant({ name: 'The Storm\'s Grip', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Sturmgebiet', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Zone De Tempête', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: '暴風域', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '暴风领域', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '폭풍 영역', capture: false }),
      condition: function(data) {
        return data.role == 'tank';
      },
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Hallowed Wind Stack',
          de: 'Heiliger Boden Wind',
          fr: 'Packez vous dans le vent',
          ko: '쉐어징',
          ja: '隅で頭割り',
          cn: '风分摊',
        },
      },
    },
    {
      id: 'O6S Demonic Stone',
      netRegex: NetRegexes.headMarker({ id: '0001' }),
      alarmText: function(data, matches) {
        if (data.me == matches.target) {
          return {
            en: 'Demonic Stone on YOU',
            de: 'Dämonischer Stein auf DIR',
            fr: 'Pierre démoniaque sur VOUS',
            ko: '악령의 돌 장판 대상자',
            ja: '自分にデモニックストーン',
            cn: '引导aoe',
          };
        }
      },
    },
    {
      id: 'O6S Last Kiss Tracker',
      netRegex: NetRegexes.headMarker({ id: '0017' }),
      run: function(data, matches) {
        data.lastKiss = matches.target;
      },
    },
    {
      id: 'O6S Last Kiss Marker',
      netRegex: NetRegexes.headMarker({ id: '0017' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alarmText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Last Kiss on YOU',
          de: 'Letzter Kuss auf DIR',
          fr: 'Baiser fatal sur VOUS',
          ko: '죽음의 입맞춤 대상자',
          ja: '自分に口づけ',
          cn: '死亡之吻点名',
        },
      },
    },
    {
      id: 'O6S Last Kiss',
      netRegex: NetRegexes.gainsEffect({ effectId: '5BF' }),
      condition: function(data, matches) {
        // The person who gets the marker briefly gets the effect, so
        // don't tell them twice.
        return data.me == matches.target && data.lastKiss != data.me;
      },
      alarmText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Last Kiss on YOU',
          de: 'Letzter Kuss auf DIR',
          fr: 'Baiser fatal sur VOUS',
          ko: '죽음의 입맞춤 대상자',
          ja: '自分に口づけ',
          cn: '死亡之吻点名',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Demon Chadarnook': 'gefallen(?:e|er|es|en) Chadarnook',
        'Easterly': 'Ostwind',
        'Goddess Chadarnook': 'heilig(?:e|er|es|en) Chadarnook',
        'Haunt': 'Verfolgung',
        'I have claimed the girl in the picture!': 'Das Mädchen in diesem Bildnis gehört mir!',
        'Portrayal of Earth': 'Erdgemälde',
        'Portrayal of Fire': 'Feuergemälde',
        'Portrayal of Water': 'Wassergemälde',
        'Portrayal of Wind': 'Windgemälde',
        'The Storm\'s Grip': 'Sturmgebiet',
      },
      'replaceText': {
        'Demonic Howl': 'Dämonisches Heulen',
        'Demonic Pain': 'Dämonischer Schmerz',
        'Demonic Shear': 'Dämonische Schere',
        'Demonic Spout': 'Dämonischer Überschwang',
        'Demonic Stone': 'Dämonischer Stein',
        'Demonic Storm': 'Dämonischer Sturm',
        'Demonic Wave': 'Dämonische Welle',
        'Divine Lure': 'Göttliche Verlockung',
        'Earthquake': 'Erdbeben',
        'Easterlies': 'Ostwinde',
        'Featherlance': 'Federlanze',
        'Flash Fire': 'Blitzfeuer',
        'Flash Flood': 'Blitzregen',
        'Flash Gale': 'Blitzwind',
        'Flash Torrent': 'Blitzregen',
        'Last Kiss': 'Todeskuss',
        'Lullaby': 'Wiegenlied',
        'Materialize': 'Materialisierung',
        'Poltergeist': 'Poltergeist',
        'Possession': 'Besessenheit',
        'Release': 'Befreiung',
        'Rock Hard': 'Felsspalter',
        'The Price': 'Tödliche Versuchung',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Demon Chadarnook': 'démon Chadarnouk',
        'Easterly': 'rafale ultime',
        'Goddess Chadarnook': 'déesse Chadarnouk',
        'Haunt': 'Cauchemar corporel',
        'Portrayal of Earth': 'peinture de la terre',
        'Portrayal of Fire': 'peinture du feu',
        'Portrayal of Water': 'peinture de l\'eau',
        'Portrayal of Wind': 'peinture du vent',
        'The Storm\'s Grip': 'Emprise de la tempête',
      },
      'replaceText': {
        'Demonic Howl': 'Hurlement démoniaque',
        'Demonic Pain': 'Douleur démoniaque',
        'Demonic Shear': 'Cisailles démoniaques',
        'Demonic Spout': 'Vague démoniaque',
        'Demonic Stone': 'Pierre démoniaque',
        'Demonic Storm': 'Tempête démoniaque',
        'Demonic Wave': 'Vague démoniaque',
        'Divine Lure': 'Séduction divine',
        'Earthquake': 'Grand séisme',
        'Easterlies': 'Rafale Ultim',
        'Featherlance': 'Lance de plume',
        'Flash Fire': 'Flammes subites',
        'Flash Flood': 'Pluie subite',
        'Flash Gale': 'Vent subit',
        'Flash Torrent': 'Pluie subite',
        'Last Kiss': 'Baiser fatal',
        'Lullaby': 'Berceuse',
        'Materialize': 'Matérialisation',
        'Poltergeist': 'Esprit frappeur',
        'Possession': 'Possession',
        'Release': 'Libération',
        'Rock Hard': 'Brise-roc',
        'The Price': 'Tentation mortelle',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Demon Chadarnook': 'チャダルヌーク・デーモン',
        'Easterly': '極風',
        'Goddess Chadarnook': 'チャダルヌーク・ゴッデス',
        'Haunt': '思念体',
        'I have claimed the girl in the picture!': 'グフフフ……この絵の女は、わしがいただいた……。',
        'Portrayal of Earth': '土の絵画',
        'Portrayal of Fire': '火の絵画',
        'Portrayal of Water': '水の絵画',
        'Portrayal of Wind': '風の絵画',
        'The Storm\'s Grip': '暴風域',
      },
      'replaceText': {
        'Demonic Howl': 'デモニックハウル',
        'Demonic Pain': 'デモニックペイン',
        'Demonic Shear': 'デモニックシアー',
        'Demonic Spout': 'デモニックスパウト',
        'Demonic Stone': 'デモニックストーン',
        'Demonic Storm': 'デモニックストーム',
        'Demonic Wave': 'デモニックウェーブ',
        'Divine Lure': '女神の誘惑',
        'Earthquake': '大地震',
        'Easterlies': '極風',
        'Featherlance': 'フェザーランス',
        'Flash Fire': 'フラッシュファイア',
        'Flash Flood': 'フラッシュレイン',
        'Flash Gale': 'フラッシュウィンド',
        'Flash Torrent': 'フラッシュレイン',
        'Last Kiss': '死の口づけ',
        'Lullaby': '子守歌',
        'Materialize': '実体化',
        'Poltergeist': 'ポルターガイスト',
        'Possession': '絵画憑依',
        'Release': '憑依解除',
        'Rock Hard': 'ロッククラッシャー',
        'The Price': '死の誘い',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Demon Chadarnook': '恶魔查达奴克',
        'Easterly': '极风',
        'Goddess Chadarnook': '神圣查达奴克',
        'Haunt': '幻影',
        'I have claimed the girl in the picture!': '呵哼哼……这个画作的女人就归我了',
        'Portrayal of Earth': '土之画作',
        'Portrayal of Fire': '火之画作',
        'Portrayal of Water': '水之画作',
        'Portrayal of Wind': '风之画作',
        'The Storm\'s Grip': '暴风域',
      },
      'replaceText': {
        'Demonic Howl': '恶魔啸',
        'Demonic Pain': '恶魔痛',
        'Demonic Shear': '恶魔斩',
        'Demonic Spout': '恶魔喷',
        'Demonic Stone': '恶魔飞石',
        'Demonic Storm': '恶魔风暴',
        'Demonic Wave': '恶魔波',
        'Divine Lure': '女神的诱惑',
        'Earthquake': '大地震',
        'Easterlies': '极风',
        'Featherlance': '羽枪',
        'Flash Fire': '闪光炎',
        'Flash Flood': '闪光雨',
        'Flash Gale': '闪光风',
        'Flash Torrent': '闪光雨',
        'Last Kiss': '死亡之吻',
        'Lullaby': '摇篮曲',
        'Materialize': '实体化',
        'Poltergeist': '骚灵',
        'Possession': '附身画像',
        'Release': '附身解除',
        'Rock Hard': '碎岩',
        'The Price': '死亡诱惑',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Demon Chadarnook': '차다르누크 악령',
        'Easterly': '극풍',
        'Goddess Chadarnook': '차다르누크 여신',
        'Haunt': '사념체',
        'Portrayal of Earth': '땅의 그림',
        'Portrayal of Fire': '불의 그림',
        'Portrayal of Water': '물의 그림',
        'Portrayal of Wind': '바람의 그림',
        'The Storm\'s Grip': '폭풍 영역',
      },
      'replaceText': {
        'Demonic Howl': '악령의 외침',
        'Demonic Pain': '악령의 고통',
        'Demonic Shear': '악령의 참격',
        'Demonic Spout': '악령의 물기둥',
        'Demonic Stone': '악령의 돌',
        'Demonic Storm': '악령의 폭풍',
        'Demonic Wave': '악령의 물결',
        'Divine Lure': '여신의 유혹',
        'Earthquake': '대지진',
        'Featherlance': '깃털창',
        'Flash Fire': '불바다',
        'Flash Flood': '급류',
        'Flash Gale': '돌풍',
        'Flash Torrent': '급류',
        'Last Kiss': '죽음의 입맞춤',
        'Lullaby': '자장가',
        'Materialize': '실체화',
        'Poltergeist': '폴터가이스트',
        'Possession': '그림 빙의',
        'Release': '빙의 해제',
        'Rock Hard': '암석 분쇄',
        'The Price': '죽음의 유혹',
      },
    },
  ],
}];
