const COUNTRY_TOOLTIPS = {
  '🇦🇫': 'Афганистан',
  '🇦🇱': 'Албания',
  '🇩🇿': 'Алжир',
  '🇦🇩': 'Андорра',
  '🇦🇴': 'Ангола',
  '🇦🇬': 'Антигуа и Барбуда',
  '🇦🇷': 'Аргентина',
  '🇦🇲': 'Армения',
  '🇦🇺': 'Австралия',
  '🇦🇹': 'Австрия',
  '🇦🇿': 'Азербайджан',
  '🇧🇸': 'Багамы',
  '🇧🇭': 'Бахрейн',
  '🇧🇩': 'Бангладеш',
  '🇧🇧': 'Барбадос',
  '🇧🇾': 'Беларусь',
  '🇧🇪': 'Бельгия',
  '🇧🇿': 'Белиз',
  '🇧🇯': 'Бенин',
  '🇧🇹': 'Бутан',
  '🇧🇴': 'Боливия',
  '🇧🇦': 'Босния и Герцеговина',
  '🇧🇼': 'Ботсвана',
  '🇧🇷': 'Бразилия',
  '🇧🇳': 'Бруней',
  '🇧🇬': 'Болгария',
  '🇧🇫': 'Буркина-Фасо',
  '🇧🇮': 'Бурунди',
  '🇰🇭': 'Камбоджа',
  '🇨🇲': 'Камерун',
  '🇨🇦': 'Канада',
  '🇨🇻': 'Кабо-Верде',
  '🇨🇫': 'ЦАР',
  '🇹🇩': 'Чад',
  '🇨🇱': 'Чили',
  '🇨🇳': 'Китай',
  '🇨🇴': 'Колумбия',
  '🇰🇲': 'Коморы',
  '🇨🇬': 'Конго',
  '🇨🇩': 'ДР Конго',
  '🇨🇷': 'Коста-Рика',
  '🇨🇮': 'Кот-д\'Ивуар',
  '🇭🇷': 'Хорватия',
  '🇨🇺': 'Куба',
  '🇨🇾': 'Кипр',
  '🇨🇿': 'Чехия',
  '🇩🇰': 'Дания',
  '🇩🇯': 'Джибути',
  '🇩🇲': 'Доминика',
  '🇩🇴': 'Доминикана',
  '🇪🇨': 'Эквадор',
  '🇪🇬': 'Египет',
  '🇸🇻': 'Сальвадор',
  '🇬🇶': 'Экв. Гвинея',
  '🇪🇷': 'Эритрея',
  '🇪🇪': 'Эстония',
  '🇸🇿': 'Эсватини',
  '🇪🇹': 'Эфиопия',
  '🇫🇯': 'Фиджи',
  '🇫🇮': 'Финляндия',
  '🇫🇷': 'Франция',
  '🇬🇦': 'Габон',
  '🇬🇲': 'Гамбия',
  '🇬🇪': 'Грузия',
  '🇩🇪': 'Германия',
  '🇬🇭': 'Гана',
  '🇬🇷': 'Греция',
  '🇬🇩': 'Гренада',
  '🇬🇹': 'Гватемала',
  '🇬🇳': 'Гвинея',
  '🇬🇼': 'Гвинея-Бисау',
  '🇬🇾': 'Гайана',
  '🇭🇹': 'Гаити',
  '🇭🇳': 'Гондурас',
  '🇭🇺': 'Венгрия',
  '🇮🇸': 'Исландия',
  '🇮🇳': 'Индия',
  '🇮🇩': 'Индонезия',
  '🇮🇷': 'Иран',
  '🇮🇶': 'Ирак',
  '🇮🇪': 'Ирландия',
  '🇮🇱': 'Израиль',
  '🇮🇹': 'Италия',
  '🇯🇲': 'Ямайка',
  '🇯🇵': 'Япония',
  '🇯🇴': 'Иордания',
  '🇰🇿': 'Казахстан',
  '🇰🇪': 'Кения',
  '🇰🇮': 'Кирибати',
  '🇰🇵': 'КНДР',
  '🇰🇷': 'Южная Корея',
  '🇽🇰': 'Косово',
  '🇰🇼': 'Кувейт',
  '🇰🇬': 'Киргизия',
  '🇱🇦': 'Лаос',
  '🇱🇻': 'Латвия',
  '🇱🇧': 'Ливан',
  '🇱🇸': 'Лесото',
  '🇱🇷': 'Либерия',
  '🇱🇾': 'Ливия',
  '🇱🇮': 'Лихтенштейн',
  '🇱🇹': 'Литва',
  '🇱🇺': 'Люксембург',
  '🇲🇬': 'Мадагаскар',
  '🇲🇼': 'Малави',
  '🇲🇾': 'Малайзия',
  '🇲🇻': 'Мальдивы',
  '🇲🇱': 'Мали',
  '🇲🇹': 'Мальта',
  '🇲🇭': 'Маршалловы Острова',
  '🇲🇷': 'Мавритания',
  '🇲🇺': 'Маврикий',
  '🇲🇽': 'Мексика',
  '🇫🇲': 'Микронезия',
  '🇲🇩': 'Молдова',
  '🇲🇨': 'Монако',
  '🇲🇳': 'Монголия',
  '🇲🇪': 'Черногория',
  '🇲🇦': 'Марокко',
  '🇲🇿': 'Мозамбик',
  '🇲🇲': 'Мьянма',
  '🇳🇦': 'Намибия',
  '🇳🇷': 'Науру',
  '🇳🇵': 'Непал',
  '🇳🇱': 'Нидерланды',
  '🇳🇿': 'Новая Зеландия',
  '🇳🇮': 'Никарагуа',
  '🇳🇪': 'Нигер',
  '🇳🇬': 'Нигерия',
  '🇲🇰': 'Северная Македония',
  '🇳🇴': 'Норвегия',
  '🇴🇲': 'Оман',
  '🇵🇰': 'Пакистан',
  '🇵🇼': 'Палау',
  '🇵🇸': 'Палестина',
  '🇵🇦': 'Панама',
  '🇵🇬': 'Папуа — Новая Гвинея',
  '🇵🇾': 'Парагвай',
  '🇵🇪': 'Перу',
  '🇵🇭': 'Филиппины',
  '🇵🇱': 'Польша',
  '🇵🇹': 'Португалия',
  '🇶🇦': 'Катар',
  '🇷🇴': 'Румыния',
  '🇷🇺': 'Россия',
  '🇷🇼': 'Руанда',
  '🇰🇳': 'Сент-Китс и Невис',
  '🇱🇨': 'Сент-Люсия',
  '🇻🇨': 'Сент-Винсент и Гренадины',
  '🇼🇸': 'Самоа',
  '🇸🇲': 'Сан-Марино',
  '🇸🇹': 'Сан-Томе и Принсипи',
  '🇸🇦': 'Саудовская Аравия',
  '🇸🇳': 'Сенегал',
  '🇷🇸': 'Сербия',
  '🇸🇨': 'Сейшелы',
  '🇸🇱': 'Сьерра-Леоне',
  '🇸🇬': 'Сингапур',
  '🇸🇰': 'Словакия',
  '🇸🇮': 'Словения',
  '🇸🇧': 'Соломоновы Острова',
  '🇸🇴': 'Сомали',
  '🇿🇦': 'ЮАР',
  '🇸🇸': 'Южный Судан',
  '🇪🇸': 'Испания',
  '🇱🇰': 'Шри-Ланка',
  '🇸🇩': 'Судан',
  '🇸🇷': 'Суринам',
  '🇸🇪': 'Швеция',
  '🇨🇭': 'Швейцария',
  '🇸🇾': 'Сирия',
  '🇹🇼': 'Тайвань',
  '🇹🇯': 'Таджикистан',
  '🇹🇿': 'Танзания',
  '🇹🇭': 'Таиланд',
  '🇹🇱': 'Восточный Тимор',
  '🇹🇬': 'Того',
  '🇹🇴': 'Тонга',
  '🇹🇹': 'Тринидад и Тобаго',
  '🇹🇳': 'Тунис',
  '🇹🇷': 'Турция',
  '🇹🇲': 'Туркменистан',
  '🇹🇻': 'Тувалу',
  '🇺🇬': 'Уганда',
  '🇺🇦': 'Украина',
  '🇦🇪': 'ОАЭ',
  '🇬🇧': 'Великобритания',
  '🇺🇸': 'США',
  '🇺🇾': 'Уругвай',
  '🇺🇿': 'Узбекистан',
  '🇻🇺': 'Вануату',
  '🇻🇦': 'Ватикан',
  '🇻🇪': 'Венесуэла',
  '🇻🇳': 'Вьетнам',
  '🇾🇪': 'Йемен',
  '🇿🇲': 'Замбия',
  '🇿🇼': 'Зимбабве'
};


class PlayersDatabase {
  constructor() {
    this.sortFilters = {hack: '', description: '', alpha: '', country: ''};
    this.exactSteamIdMatch = true;
    this.currentQuery = '';
    this.openGroupId = null;
    this.avatarCache = new Map();

    this.waitForDatabase()
        .then(() => {
          this.players = DATABASE_JSON.players;
          this.filteredPlayers = [...this.players];
          this.init();
        })
        .catch(err => {
          console.error('Ошибка загрузки database.js:', err);
          document.getElementById('playersTableBody').innerHTML =
              '<tr><td colspan="5" style="text-align:center;padding:50px;color:var(--danger);">Ошибка загрузки database.js</td></tr>';
        });
  }

  waitForDatabase(attempts = 50) {
    return new Promise((resolve, reject) => {
      let count = 0;
      const check = () => {
        if (typeof DATABASE_JSON !== 'undefined' && DATABASE_JSON.players) {
          resolve();
        } else if (count++ > attempts) {
          reject(new Error('database.js не загрузился'));
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  }

  init() {
    this.initThemeToggle();
    this.initSearch();
    this.initSortControls();
    this.initResetSortTable();
    this.initStatsModal();
    this.initChangelogModal();
    this.initCollapseHandlers();
    this.initCountriesList();
    this.initHacksList();
    this.fetchDatabaseLastModified();
    this.applySorting();
  }

  initCountriesList() {
    const countrySelect = document.getElementById('countryFilter');
    if (!countrySelect) return;
    const uniqueCountries = new Set();
    this.players.forEach(p => {
      const c = (p['country residence'] || '').toString().trim();
      if (c && c !== '—') uniqueCountries.add(c);
    });
    const sorted = Array.from(uniqueCountries).sort((a, b) => {
      return (COUNTRY_TOOLTIPS[a] || a)
          .localeCompare(COUNTRY_TOOLTIPS[b] || b, 'ru');
    });
    sorted.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = `${c} ${COUNTRY_TOOLTIPS[c] || 'Неизвестная страна'}`;
      countrySelect.appendChild(opt);
    });
  }

  initHacksList() {
    const hackSelect = document.getElementById('hackFilter');
    if (!hackSelect) return;
    const uniqueHacks = new Set();
    this.players.forEach(p => {
      const h = (p.hacks || '').toString().trim();
      if (h && h !== '—') {
        h.split(',')
            .map(x => x.trim())
            .filter(Boolean)
            .forEach(x => uniqueHacks.add(x));
      }
    });
    Array.from(uniqueHacks)
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .forEach(hack => {
          const opt = document.createElement('option');
          opt.value = hack;
          opt.textContent = hack;
          hackSelect.appendChild(opt);
        });
  }

  fetchDatabaseLastModified() {
    const el = document.getElementById('dbLastUpdated');
    if (!el) return;

    fetch('JS/database.js', {method: 'HEAD', cache: 'no-cache'})
        .then(response => {
          const lastModified = response.headers.get('Last-Modified');
          if (lastModified) {
            const date = new Date(lastModified);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            el.textContent = `${day}.${month}.${year} ${hours}:${minutes}`;
          } else {
            el.textContent = 'нет данных';
          }
        })
        .catch(() => {
          el.textContent = 'нет данных';
        });
  }

  /* ===== STEAM AVATARS ===== */

  loadAvatar(steamId64, imgElement) {
    if (!steamId64) return;

    if (this.avatarCache.has(steamId64)) {
      const cached = this.avatarCache.get(steamId64);
      if (cached) {
        imgElement.src = cached;
        imgElement.classList.add('avatar-loaded');
      }
      return;
    }

    const xmlUrl = `https://steamcommunity.com/profiles/${steamId64}/?xml=1`;

    const proxies = [
      (url) =>
          `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
      (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
      (url) => `https://proxy.cors.sh/${url}`,
    ];

    const tryProxy = (index) => {
      if (index >= proxies.length) {
        this.avatarCache.set(steamId64, null);
        return;
      }

      fetch(proxies[index](xmlUrl), {signal: AbortSignal.timeout(8000)})
          .then(r => {
            if (!r.ok) throw new Error('fetch failed');
            return r.text();
          })
          .then(xml => {
            const match = xml.match(
                /<avatarMedium><!\[CDATA\[(.*?)\]\]><\/avatarMedium>/);
            if (match && match[1]) {
              const avatarUrl = match[1];
              this.avatarCache.set(steamId64, avatarUrl);
              imgElement.src = avatarUrl;
              imgElement.classList.add('avatar-loaded');
            } else {
              throw new Error('no avatar in xml');
            }
          })
          .catch(() => {
            tryProxy(index + 1);
          });
    };

    tryProxy(0);
  }

  /* ===== TWINK GROUPING ===== */

  isTwink(player) {
    const desc = (player.description || '').trim().toLowerCase();
    return desc.includes('twink') ||
        /^twink\s+for\s+STEAM_\d+:\d+:\d+/i.test(
            (player.description || '').trim());
  }

  buildGroups(players) {
    const twinkForMap = new Map();
    const nonTwinkFor = [];

    players.forEach(p => {
      const desc = (p.description || '').trim();
      const twinkMatch = desc.match(/^twink\s+for\s+(STEAM_\d+:\d+:\d+)/i);
      if (twinkMatch) {
        const ownerSid = twinkMatch[1].toUpperCase();
        if (!twinkForMap.has(ownerSid)) twinkForMap.set(ownerSid, []);
        twinkForMap.get(ownerSid).push(p);
      } else {
        nonTwinkFor.push(p);
      }
    });

    const groupsMap = new Map();
    nonTwinkFor.forEach(p => {
      const nick = (p.nickname || '').trim().toLowerCase();
      let key;
      if (nick) {
        key = `nick_${nick}`;
      } else if (
          p.steamID && p.steamID.trim() !== '—' && p.steamID.trim() !== '') {
        key = `sid_${p.steamID.trim()}`;
      } else {
        key = `__empty_${Math.random()}`;
      }
      if (!groupsMap.has(key)) groupsMap.set(key, []);
      groupsMap.get(key).push(p);
    });

    const result = [];
    let groupId = 0;
    const usedTwinkForKeys = new Set();

    groupsMap.forEach((group) => {
      let mainIndex = group.findIndex(p => !this.isTwink(p));
      if (mainIndex === -1) mainIndex = 0;
      const main = group[mainIndex];
      const twinks = group.filter((_, i) => i !== mainIndex);

      const mainSid = (main.steamID || '').trim().toUpperCase();
      if (mainSid && twinkForMap.has(mainSid)) {
        twinks.push(...twinkForMap.get(mainSid));
        usedTwinkForKeys.add(mainSid);
      }

      group.forEach((p, i) => {
        if (i === mainIndex) return;
        const pSid = (p.steamID || '').trim().toUpperCase();
        if (pSid && twinkForMap.has(pSid) && !usedTwinkForKeys.has(pSid)) {
          twinks.push(...twinkForMap.get(pSid));
          usedTwinkForKeys.add(pSid);
        }
      });

      result.push({
        player: main,
        type: 'main',
        twinks: twinks,
        groupId: twinks.length > 0 ? groupId++ : -1
      });
    });

    twinkForMap.forEach((twinks, ownerSid) => {
      if (usedTwinkForKeys.has(ownerSid)) return;
      if (twinks.length === 1) {
        result.push({player: twinks[0], type: 'main', twinks: [], groupId: -1});
      } else {
        result.push({
          player: twinks[0],
          type: 'main',
          twinks: twinks.slice(1),
          groupId: groupId++
        });
      }
    });

    return result;
  }

  /* ===== COLLAPSE ===== */

  initCollapseHandlers() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.twink-toggle')) return;
      this.collapseAllGroups();
    });
  }

  collapseAllGroups() {
    if (this.openGroupId === null) return;
    document.querySelectorAll('.twink-row')
        .forEach(r => r.classList.remove('twink-row-visible'));
    document.querySelectorAll('.twink-toggle')
        .forEach(t => t.classList.remove('twink-toggle-open'));
    this.openGroupId = null;
  }

  toggleGroup(groupId) {
    const wasOpen = this.openGroupId === groupId;
    this.collapseAllGroups();
    if (wasOpen) return;
    document.querySelectorAll(`.twink-row[data-group="${groupId}"]`)
        .forEach(r => r.classList.add('twink-row-visible'));
    const toggle =
        document.querySelector(`.twink-toggle[data-group="${groupId}"]`);
    if (toggle) toggle.classList.add('twink-toggle-open');
    this.openGroupId = groupId;
  }

  /* ===== THEME ===== */

  initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
      const isDark = document.body.classList.contains('dark-theme');
      icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      icon.className = 'fas fa-sun';
    }
  }

  /* ===== SEARCH ===== */

  initSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    const counter = document.getElementById('searchCounter');
    const maxLen = 50;
    const updateClear = () => {
      const has = input.value.trim().length > 0;
      clearBtn.style.opacity = has ? '1' : '0.3';
      clearBtn.style.pointerEvents = has ? 'auto' : 'none';
    };
    input.addEventListener('input', (e) => {
      if (e.target.value.length > maxLen)
        e.target.value = e.target.value.slice(0, maxLen);
      if (counter) counter.textContent = `${e.target.value.length}/${maxLen}`;
      this.search(e.target.value);
      updateClear();
    });
    clearBtn.addEventListener('click', () => {
      if (input.value.trim().length === 0) return;
      input.value = '';
      if (counter) counter.textContent = `0/${maxLen}`;
      this.search('');
      input.blur();
      updateClear();
    });
    updateClear();
  }

  /* ===== SORT ===== */

  initSortControls() {
    const sortToggle = document.getElementById('sortToggle');
    const sortModal = document.getElementById('sortModal');
    const closeSortModal = document.getElementById('closeSortModal');
    const applySortBtn = document.getElementById('applySortBtn');
    const resetSortBtn = document.getElementById('resetSortBtn');

    const open = () => {
      if (!sortModal) return;
      sortModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      const ids = {
        hackFilter: 'hack',
        descFilter: 'description',
        alphaSort: 'alpha',
        countryFilter: 'country'
      };
      Object.entries(ids).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.value = this.sortFilters[key] || '';
      });
      const ex = document.getElementById('exactSteamId');
      if (ex) ex.checked = this.exactSteamIdMatch;
    };
    const close = () => {
      if (sortModal) {
        sortModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    sortToggle && sortToggle.addEventListener('click', open);
    closeSortModal && closeSortModal.addEventListener('click', close);
    sortModal && sortModal.addEventListener('click', (e) => {
      if (e.target === sortModal) close();
    });

    applySortBtn && applySortBtn.addEventListener('click', () => {
      this.sortFilters.hack =
          (document.getElementById('hackFilter') || {}).value || '';
      this.sortFilters.description =
          (document.getElementById('descFilter') || {}).value || '';
      this.sortFilters.alpha =
          (document.getElementById('alphaSort') || {}).value || '';
      this.sortFilters.country =
          (document.getElementById('countryFilter') || {}).value || '';
      this.exactSteamIdMatch =
          (document.getElementById('exactSteamId') || {}).checked || false;
      this.applySorting();
      close();
    });

    resetSortBtn && resetSortBtn.addEventListener('click', () => {
      ['hackFilter', 'descFilter', 'alphaSort', 'countryFilter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      const ex = document.getElementById('exactSteamId');
      if (ex) ex.checked = false;
      this.sortFilters = {hack: '', description: '', alpha: '', country: ''};
      this.exactSteamIdMatch = false;
      this.applySorting();
    });
  }

  initResetSortTable() {
    const btn = document.getElementById('resetSortTable');
    if (!btn) return;
    btn.addEventListener('click', () => {
      this.sortFilters = {hack: '', description: '', alpha: '', country: ''};
      this.exactSteamIdMatch = false;
      this.applySorting();
      btn.blur();
    });
  }

  /* ===== STATS MODAL ===== */

  initStatsModal() {
    const toggle = document.getElementById('statsToggle');
    const modal = document.getElementById('statsModal');
    const closeBtn = document.getElementById('closeStatsModal');
    const open = () => {
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.generateStatistics();
      }
    };
    const close = () => {
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };
    toggle && toggle.addEventListener('click', open);
    closeBtn && closeBtn.addEventListener('click', close);
    modal && modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });
  }

  /* ===== CHANGELOG MODAL ===== */

  initChangelogModal() {
    const toggle = document.getElementById('changelogToggle');
    const modal = document.getElementById('changelogModal');
    const closeBtn = document.getElementById('closeChangelogModal');
    this.changelogLoaded = false;

    const open = () => {
      if (!modal) return;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (!this.changelogLoaded) this.loadChangelog();
    };
    const close = () => {
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    toggle && toggle.addEventListener('click', open);
    closeBtn && closeBtn.addEventListener('click', close);
    modal && modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });
  }

  loadChangelog() {
    const body = document.getElementById('changelogModalBody');
    if (!body) return;

    fetch('README.md')
        .then(r => {
          if (!r.ok) throw new Error('local failed');
          return r.text();
        })
        .then(text => {
          body.innerHTML = this.parseChangelog(text);
          this.changelogLoaded = true;
        })
        .catch(() => {
          const rawUrl =
              `https://raw.githubusercontent.com/exzereyddi/Database/refs/heads/main/README.md`;
          fetch(rawUrl)
              .then(r => {
                if (!r.ok) throw new Error('github failed');
                return r.text();
              })
              .then(text => {
                body.innerHTML = this.parseChangelog(text);
                this.changelogLoaded = true;
              })
              .catch(err => {
                body.innerHTML = `<div class="changelog-error">
                  <i class="fas fa-exclamation-triangle"></i>
                  <p>Не удалось загрузить обновления</p>
                  <small>${this.escapeHtml(err.message)}</small>
                </div>`;
              });
        });
  }

  parseChangelog(markdown) {
    const updatesMatch = markdown.match(
        /## 📝 Обновления\s*\n([\s\S]*?)(?=\n---|\n## [^#]|$)/);
    if (!updatesMatch) return '<p>Обновления не найдены.</p>';

    const updatesText = updatesMatch[1];
    const entries = [];
    const entryRegex = /### (.+)\n([\s\S]*?)(?=\n### |\s*$)/g;
    let match;

    while ((match = entryRegex.exec(updatesText)) !== null) {
      const date = match[1].trim();
      const content = match[2].trim();
      const items = content.split('\n')
                        .map(line => line.replace(/^- /, '').trim())
                        .filter(line => line.length > 0);
      entries.push({date, items});
    }

    if (entries.length === 0) return '<p>Обновления не найдены.</p>';

    let html = '';
    entries.forEach((entry, index) => {
      const isLatest = index === 0;
      html += `
        <div class="changelog-entry ${isLatest ? 'changelog-latest' : ''}">
          <div class="changelog-date">
            <i class="fas fa-calendar-day"></i>
            <span>${this.escapeHtml(entry.date)}</span>
            ${isLatest ? '<span class="changelog-badge">Последнее</span>' : ''}
          </div>
          <ul class="changelog-list">
            ${
          entry.items.map(item => `<li>${this.escapeHtml(item)}</li>`)
              .join('')}
          </ul>
        </div>
      `;
    });

    return html;
  }

  generateStatistics() {
    const statsBody = document.getElementById('statsModalBody');
    if (!statsBody) return;

    const mainPlayers = this.players.filter(p => !this.isTwink(p));
    const twinkCount = this.players.filter(p => this.isTwink(p)).length;
    const totalPlayers = mainPlayers.length;
    const isNoCheat = (p) =>
        !p.hacks || p.hacks.trim() === '' || p.hacks === '—';
    const cheaters = mainPlayers.filter(p => !isNoCheat(p));
    const nonCheaters = mainPlayers.filter(isNoCheat);
    const cheatersCount = cheaters.length;
    const nonCheatersCount = nonCheaters.length;
    const cp = totalPlayers > 0 ?
        ((cheatersCount / totalPlayers) * 100).toFixed(1) :
        '0.0';
    const ncp = totalPlayers > 0 ?
        ((nonCheatersCount / totalPlayers) * 100).toFixed(1) :
        '0.0';

    const countryStats = {};
    let noCC = 0;
    mainPlayers.forEach(p => {
      const c = (p['country residence'] || '').toString().trim();
      if (c && c !== '—')
        countryStats[c] = (countryStats[c] || 0) + 1;
      else
        noCC++;
    });
    const sc = Object.entries(countryStats).sort((a, b) => b[1] - a[1]);

    const ccs = {};
    let cnccc = 0;
    cheaters.forEach(p => {
      const c = (p['country residence'] || '').toString().trim();
      if (c && c !== '—')
        ccs[c] = (ccs[c] || 0) + 1;
      else
        cnccc++;
    });
    const scc = Object.entries(ccs).sort((a, b) => b[1] - a[1]);

    const hs = {};
    cheaters.forEach(p => {
      const h = (p.hacks || '').trim();
      if (h && h !== '—')
        h.split(',').map(x => x.trim()).filter(Boolean).forEach(hack => {
          if (!hs[hack]) hs[hack] = {total: 0, countries: {}, noCountry: 0};
          hs[hack].total++;
          const c = (p['country residence'] || '').toString().trim();
          if (c && c !== '—')
            hs[hack].countries[c] = (hs[hack].countries[c] || 0) + 1;
          else
            hs[hack].noCountry++;
        });
    });
    const sh = Object.entries(hs).sort((a, b) => b[1].total - a[1].total);

    let html =
        `<section class="stats-section"><h3><i class="fas fa-user-secret"></i> Читеры по странам</h3><div class="stats-list">`;
    scc.forEach(([c, n]) => {
      html += `<div class="stat-item"><span class="stat-label">${c} ${
          COUNTRY_TOOLTIPS[c] || '?'}</span><span class="stat-value">${n} (${
          (n / cheatersCount * 100).toFixed(1)}%)</span></div>`;
    });
    if (cnccc > 0)
      html +=
          `<div class="stat-item"><span class="stat-label">❓ Без страны</span><span class="stat-value">${
              cnccc} (${
              (cnccc / cheatersCount * 100).toFixed(1)}%)</span></div>`;
    html += `</div></section>`;

    html +=
        `<section class="stats-section"><h3><i class="fas fa-flag"></i> Все игроки по странам</h3><div class="stats-list">`;
    sc.forEach(([c, n]) => {
      html += `<div class="stat-item"><span class="stat-label">${c} ${
          COUNTRY_TOOLTIPS[c] || '?'}</span><span class="stat-value">${n} (${
          (n / totalPlayers * 100).toFixed(1)}%)</span></div>`;
    });
    if (noCC > 0)
      html +=
          `<div class="stat-item"><span class="stat-label">❓ Без страны</span><span class="stat-value">${
              noCC} (${(noCC / totalPlayers * 100).toFixed(1)}%)</span></div>`;
    html += `</div></section>`;

    html +=
        `<section class="stats-section"><h3><i class="fas fa-bug"></i> По читам и функциям</h3><div class="stats-list">`;
    sh.forEach(([hack, data]) => {
      html +=
          `<div class="stat-item-hack"><div class="hack-header"><span class="stat-label-hack">${
              this.escapeHtml(
                  hack)}</span><span class="stat-value-hack">${data.total} (${
              (data.total / totalPlayers * 100).toFixed(1)}%)</span></div>`;
      const hc = Object.entries(data.countries).sort((a, b) => b[1] - a[1]);
      if (hc.length > 0 || data.noCountry > 0) {
        html += `<div class="hack-countries">`;
        hc.forEach(([c, n]) => {
          html +=
              `<div class="hack-country-item"><span class="hack-country-label">${
                  c} ${
                  COUNTRY_TOOLTIPS[c] ||
                  '?'}</span><span class="hack-country-value">${n} (${
                  (n / data.total * 100).toFixed(1)}%)</span></div>`;
        });
        if (data.noCountry > 0)
          html +=
              `<div class="hack-country-item"><span class="hack-country-label">❓ Без страны</span><span class="hack-country-value">${
                  data.noCountry} (${
                  (data.noCountry / data.total * 100)
                      .toFixed(1)}%)</span></div>`;
        html += `</div>`;
      }
      html += `</div>`;
    });
    html += `</div></section>`;

    html +=
        `<section class="stats-section"><h3><i class="fas fa-chart-pie"></i> Читеры vs Не читеры</h3><div class="stats-list">
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-user-secret"></i> Читеры</span><span class="stat-value stat-value-danger">${
            cheatersCount} (${cp}%)</span></div>
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-user-check"></i> Не читеры</span><span class="stat-value stat-value-success">${
            nonCheatersCount} (${ncp}%)</span></div>
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-users"></i> Всего игроков</span><span class="stat-value stat-value-primary">${
            totalPlayers} (100%)</span></div>
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-clone"></i> Твинки (не учтены)</span><span class="stat-value">${
            twinkCount}</span></div>
    </div></section>`;

    statsBody.innerHTML = html;
  }

  /* ===== STEAM ID ===== */

  steamId64ToSteamId(steamId64) {
    if (!steamId64) return '';
    try {
      const BASE = 76561197960265728n;
      const id = BigInt(steamId64);
      if (id < BASE) return '';
      const accountId = id - BASE;
      const Y = accountId % 2n;
      const Z = (accountId - Y) / 2n;
      return `STEAM_0:${Y.toString()}:${Z.toString()}`;
    } catch {
      return '';
    }
  }

  steamIdToSteamId64(steamId) {
    if (!steamId || steamId === '—') return '';
    const match = steamId.match(/^STEAM_(\d+):(\d+):(\d+)$/i);
    if (!match) return '';
    const [, , Y, Z] = match.map(Number);
    return (76561197960265728n + BigInt(Z) * 2n + BigInt(Y)).toString();
  }

  /* ===== SEARCH & SORT ===== */

  search(query) {
    let q = query.trim();
    const pm = q.toLowerCase().match(/steamcommunity\.com\/profiles\/(\d{17})/);
    if (pm) q = pm[1];
    if (/^\d{17}$/.test(q)) {
      const s = this.steamId64ToSteamId(q);
      if (s) q = s.toLowerCase();
    } else
      q = q.toLowerCase();
    this.currentQuery = (query || '').trim();
    if (!q)
      this.filteredPlayers = [...this.players];
    else {
      this.filteredPlayers = this.players.filter(p => {
        const n = (p.nickname ?? '').toLowerCase(),
              s = (p.steamID ?? '').toLowerCase();
        const h = (p.hacks ?? '').toLowerCase(),
              d = (p.description ?? '').toLowerCase();
        const sm = this.exactSteamIdMatch ? s === q : s.includes(q);
        return n.includes(q) || h.includes(q) || d.includes(q) || sm;
      });
    }
    this.applySorting();
  }

  applySorting() {
    let q = this.currentQuery;
    if (q) {
      const pm =
          q.toLowerCase().match(/steamcommunity\.com\/profiles\/(\d{17})/);
      if (pm) q = pm[1];
      if (/^\d{17}$/.test(q)) {
        const s = this.steamId64ToSteamId(q);
        if (s) q = s.toLowerCase();
      } else
        q = q.toLowerCase();
    }

    let result = !q ? [...this.players] : this.players.filter(p => {
      const n = (p.nickname ?? '').toLowerCase(),
            s = (p.steamID ?? '').toLowerCase();
      const h = (p.hacks ?? '').toLowerCase(),
            d = (p.description ?? '').toLowerCase();
      const sm = this.exactSteamIdMatch ? s === q : s.includes(q);
      return n.includes(q) || h.includes(q) || d.includes(q) || sm;
    });

    const isNoCheat = (p) =>
        !p.hacks || p.hacks.trim() === '' || p.hacks === '—';
    if (this.sortFilters.hack === 'none-only')
      result = result.filter(isNoCheat);
    else if (this.sortFilters.hack === 'none-first')
      result =
          [...result.filter(isNoCheat), ...result.filter(p => !isNoCheat(p))];
    else if (
        this.sortFilters.hack && !this.sortFilters.hack.startsWith('none')) {
      const t = this.sortFilters.hack.toUpperCase();
      result = result.filter(p => (p.hacks || '').toUpperCase().includes(t));
    }

    const hasDesc = (p) =>
        p.description && p.description.trim() !== '' && p.description !== '—';
    if (this.sortFilters.description === 'none-only')
      result = result.filter(p => !hasDesc(p));
    else if (this.sortFilters.description === 'none-first')
      result = [...result.filter(p => !hasDesc(p)), ...result.filter(hasDesc)];
    else if (this.sortFilters.description === 'present-only')
      result = result.filter(hasDesc);
    else if (this.sortFilters.description === 'present-first')
      result = [...result.filter(hasDesc), ...result.filter(p => !hasDesc(p))];

    if (this.sortFilters.country)
      result = result.filter(
          p => (p['country residence'] || '').toString().trim() ===
              this.sortFilters.country);

    if (this.sortFilters.alpha === 'asc')
      result.sort(
          (a, b) => (a.nickname || '')
                        .toLowerCase()
                        .localeCompare((b.nickname || '').toLowerCase(), 'ru'));
    else if (this.sortFilters.alpha === 'desc')
      result.sort(
          (a, b) => (b.nickname || '')
                        .toLowerCase()
                        .localeCompare((a.nickname || '').toLowerCase(), 'ru'));

    result.sort((a, b) => {
      const ea = (a.nickname || '').trim() === '',
            eb = (b.nickname || '').trim() === '';
      if (ea && !eb) return 1;
      if (!ea && eb) return -1;
      return 0;
    });

    this.filteredPlayers = result;
    this.openGroupId = null;
    this.renderTable();
    this.updateStats();
  }

  /* ===== RENDER ===== */

  renderTable() {
    const tbody = document.getElementById('playersTableBody');
    tbody.innerHTML = '';
    if (this.filteredPlayers.length === 0) {
      tbody.innerHTML =
          '<tr><td colspan="5" class="no-results">Ничего не найдено 😔</td></tr>';
      return;
    }
    const groups = this.buildGroups(this.filteredPlayers);
    const fragment = document.createDocumentFragment();
    const avatarsToLoad = [];

    groups.forEach(entry => {
      const mainRow = this.createPlayerRow(entry.player, false, avatarsToLoad);
      if (entry.twinks.length > 0) {
        const nickWrapper = mainRow.querySelector('.nickname-wrapper');
        if (nickWrapper) {
          const btn = document.createElement('button');
          btn.className = 'twink-toggle';
          btn.setAttribute('data-group', entry.groupId);
          btn.title = `Показать ${entry.twinks.length} твинк${
              this.twinkSuffix(entry.twinks.length)}`;
          btn.innerHTML =
              `<i class="fas fa-chevron-right"></i><span class="twink-count">${
                  entry.twinks.length}</span>`;
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleGroup(entry.groupId);
          });
          nickWrapper.insertBefore(btn, nickWrapper.firstChild);
        }
      }
      fragment.appendChild(mainRow);
      entry.twinks.forEach(twink => {
        const twinkRow = this.createPlayerRow(twink, true, avatarsToLoad);
        twinkRow.classList.add('twink-row');
        twinkRow.setAttribute('data-group', entry.groupId);
        fragment.appendChild(twinkRow);
      });
    });
    tbody.appendChild(fragment);

    let delay = 0;
    avatarsToLoad.forEach(({sid64, avatarId}) => {
      setTimeout(() => {
        const img = document.getElementById(avatarId);
        if (img) this.loadAvatar(sid64, img);
      }, delay);
      delay += 150;
    });
  }

  twinkSuffix(n) {
    const l2 = n % 100, l1 = n % 10;
    if (l2 >= 11 && l2 <= 19) return 'ов';
    if (l1 === 1) return '';
    if (l1 >= 2 && l1 <= 4) return 'а';
    return 'ов';
  }

  getOrDash(v) {
    const s = (v ?? '').toString().trim();
    return s.length > 0 ? s : '—';
  }

  createPlayerRow(player, isTwinkStyled) {
    const row = document.createElement('tr');
    if (isTwinkStyled) row.classList.add('twink-styled');

    let hacksText = player.hacks || '';
    if (hacksText && hacksText !== '—' && hacksText.trim() !== '') {
      const arr = hacksText.split(',').map(h => h.trim()).filter(Boolean);
      arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'ru'));
      hacksText = arr.join(', ');
    }

    const rawSid = (player.steamID ?? '').toString().trim();
    const hasSid = rawSid.length > 0;
    const sid64 = hasSid ? this.steamIdToSteamId64(rawSid) : '';
    const profileUrl =
        sid64 ? `http://steamcommunity.com/profiles/${sid64}` : '';

    const avatarId = sid64 ? `avatar-${sid64}` : '';
    const avatarHtml = sid64 ?
        `<img id="${
            avatarId}" class="player-avatar" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect fill='%23222' width='40' height='40' rx='8'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='%23555' font-size='16'%3E?%3C/text%3E%3C/svg%3E" alt="" />` :
        ``;

    const sidHtml = hasSid ?
        `<td class="steamid steamid-filled">
          <span class="steamid-text">${this.escapeHtml(rawSid)}</span>
          ${
            profileUrl ?
                `<div class="steam-profile-btn-container"><a href="${
                    profileUrl}" target="_blank" rel="noopener noreferrer" class="steam-profile-btn" title="Открыть профиль Steam"><i class="fab fa-steam"></i><span>Профиль</span></a></div>` :
                ''}
        </td>` :
        `<td class="steamid steamid-empty"><span class="steamid-value">—</span></td>`;

    const hasProofs = player.proofs && player.proofs.trim() !== '';
    const hacksHtml = `<td class="hacks-text"><div class="hacks-content">
        <span class="hacks-value">${
        this.escapeHtml(this.getOrDash(hacksText))}</span>
        ${
        hasProofs ?
            `<div class="proof-btn-container"><a href="${
                this.escapeHtml(
                    player
                        .proofs)}" target="_blank" rel="noopener noreferrer" class="proof-btn" title="Доказательство"><i class="fas fa-file-alt"></i><span>Доказательство</span></a></div>` :
            ''}
      </div></td>`;

    const countryRaw = (player['country residence'] ?? '').toString().trim();
    const countryTitle = COUNTRY_TOOLTIPS[countryRaw] || '';

    row.innerHTML = `
      <td class="nickname"><div class="nickname-wrapper">${
        avatarHtml}<span class="nickname-text">${
        this.escapeHtml(this.getOrDash(player.nickname))}</span></div></td>
      ${sidHtml}
      ${hacksHtml}
      <td class="description">${
        this.escapeHtml(this.getOrDash(player.description))}</td>
      <td class="country" ${
        countryTitle ? `title="${this.escapeHtml(countryTitle)}"` :
                       ''}>${this.escapeHtml(this.getOrDash(countryRaw))}</td>
    `;

    if (sid64 && avatarId) {
      requestAnimationFrame(() => {
        const img = document.getElementById(avatarId);
        if (img) this.loadAvatar(sid64, img);
      });
    }

    return row;
  }

  updateStats() {
    const total = this.filteredPlayers.length;
    const twinks = this.filteredPlayers.filter(p => this.isTwink(p)).length;
    const main = total - twinks;
    document.getElementById('playersCount').textContent = main;
    const twinksEl = document.getElementById('twinksCount');
    if (twinksEl) {
      if (twinks > 0) {
        twinksEl.textContent = `(${twinks} твинк${this.twinkSuffix(twinks)})`;
        twinksEl.style.display = '';
      } else {
        twinksEl.textContent = '';
        twinksEl.style.display = 'none';
      }
    }
  }

  escapeHtml(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }
}

/* ===== GLOBAL INIT ===== */

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.onbeforeunload = () => window.scrollTo(0, 0);
window.addEventListener('load', () => {
  const s = document.getElementById('searchInput');
  if (s) s.value = '';
});

let dbInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  dbInstance = new PlayersDatabase();

  const sourceBtn = document.querySelector('.source-button');
  if (sourceBtn) sourceBtn.addEventListener('click', () => sourceBtn.blur());

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
});

const faqToggle = document.getElementById('faqToggle');
const faqModal = document.getElementById('faqModal');
const closeModal = document.getElementById('closeModal');
faqToggle && faqToggle.addEventListener('click', () => {
  faqModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closeModal && closeModal.addEventListener('click', () => {
  faqModal.classList.remove('active');
  document.body.style.overflow = '';
});
faqModal && faqModal.addEventListener('click', (e) => {
  if (e.target === faqModal) {
    faqModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    [faqModal, document.getElementById('statsModal'),
     document.getElementById('sortModal'),
     document.getElementById('changelogModal')]
        .forEach(m => {
          if (m && m.classList.contains('active')) {
            m.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
    if (dbInstance) dbInstance.collapseAllGroups();
  }
});