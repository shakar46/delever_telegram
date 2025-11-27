// === КОНФИГУРАЦИЯ И ДАННЫЕ ===
const BOT_TOKEN = '8458915257:AAGtpsZyaUmyhtO8zNLLxYw0DGagu2vqtO4';
const CHAT_ID = '795934610';
const NO_DISCOUNT_IDS = [154, 155, 156, 157];

// БД ТОВАРОВ (БЕЗ ИЗМЕНЕНИЙ)
const productsDB = [
    { id: 1, name: 'Miniroll Лосось гриль 6 шт', price: 64000 },
    { id: 2, name: 'Miniroll Лосось 6 шт', price: 60000 },
    { id: 3, name: 'Miniroll Копчёный лосось 6 шт', price: 63000 },
    { id: 4, name: 'Miniroll Креветка 6 шт', price: 54000 },
    { id: 5, name: 'Miniroll Краб 6 шт', price: 44000 },
    { id: 6, name: 'Miniroll Форель 6 шт', price: 59000 },
    { id: 7, name: 'Miniroll Тунец 6 шт', price: 54000 },
    { id: 8, name: 'Miniroll Чикен 6 шт', price: 42000 },
    { id: 9, name: 'Miniroll Угор 6 шт', price: 66000 },
    { id: 10, name: 'Maxroll Лосось гриль 10 шт', price: 88000 },
    { id: 11, name: 'Maxroll Лосось 10 шт', price: 840000 },
    { id: 12, name: 'Maxroll Копчёный лосось 10 шт', price: 94000 },
    { id: 13, name: 'Maxroll Креветка 10 шт', price: 82000 },
    { id: 14, name: 'Maxroll Краб 10 шт', price: 65000 },
    { id: 15, name: 'Maxroll Тунец 10 шт', price: 77000 },
    { id: 16, name: 'Maxroll Чикен 10 шт', price: 62000 },
    { id: 17, name: 'Maxroll Угор 10 шт', price: 104000 },
    { id: 18, name: 'Цезар роллы 8 шт', price: 49000 },
    { id: 19, name: 'Uzumi унаги 8 шт', price: 89000 },
    { id: 20, name: 'Uzumi лосось 8 шт', price: 79000 },
    { id: 21, name: 'Яки Филадельфия 8 шт', price: 131000 },
    { id: 22, name: 'Филадельфия Classic 4 шт', price: 61000 },
    { id: 23, name: 'Филадельфия Classic 8 шт', price: 109000 },
    { id: 24, name: 'Сливочный лосось 4 шт', price: 47000 },
    { id: 25, name: 'Сливочный лосось 8 шт', price: 79000 },
    { id: 26, name: 'Филадельфия с креветкой 4 шт', price: 52000 },
    { id: 27, name: 'Филадельфия с креветкой 8 шт', price: 92000 },
    { id: 28, name: 'Филадельфия с угрём 4 шт', price: 65000 },
    { id: 29, name: 'Филадельфия с угрём 8 шт', price: 121000 },
    { id: 30, name: 'Филадельфия Кунсей 8 шт', price: 89000 },
    { id: 31, name: "Americano жареный лосось 10 шт", price: 73000 },
    { id: 32, name: "Americano чикен 10 шт", price: 64000 },
    { id: 33, name: "Сяке Темпура 8 шт", price: 65000 },
    { id: 34, name: "Унаги Темпура 8 шт", price: 59000 },
    { id: 35, name: "Вавилон 8 шт", price: 71000 },
    { id: 36, name: "Filaboom 6 шт", price: 47000 },
    { id: 37, name: 'Yaponamama 8 шт', price: 85000 },
    { id: 38, name: 'Калифорния с лососем 8 шт', price: 87000 },
    { id: 39, name: 'Калифорния с тобико 8 шт', price: 71000 },
    { id: 40, name: 'Тоби чикен маки 8 шт', price: 57000 },
    { id: 41, name: 'Chicken Best 8 шт', price: 65000 },
    { id: 42, name: 'Akibuto 8 шт', price: 83000 },
    { id: 43, name: 'Калифорния с кунжутом 8 шт', price: 51000 },
    { id: 44, name: 'Спайси сяке 8 шт', price: 63000 },
    { id: 45, name: 'Унаги роллы 8 шт', price: 77000 },
    { id: 46, name: 'Маки с копчёным лососем 8 шт', price: 52000 },
    { id: 47, name: 'Маки с лососем 8 шт', price: 47000 },
    { id: 48, name: 'Маки с угрём 8 шт', price: 56000 },
    { id: 49, name: 'Маки с тунцом 8 шт', price: 43000 },
    { id: 50, name: 'Маки с креветкой 8 шт', price: 48000 },
    { id: 51, name: 'Маки с салатом чука 8 шт', price: 29000 },
    { id: 52, name: 'Маки с огурцом 8 шт', price: 23000 },
    { id: 53, name: 'Ясай маки 8 шт', price: 33000 },
    { id: 54, name: 'Дабл чиз 8 шт', price: 83000 },
    { id: 55, name: 'Шиитаке ролл 8 шт', price: 64000 },
    { id: 56, name: 'Fish & Black', price: 99000 },
    { id: 57, name: 'Sweet филадельфия', price: 109000 },
    { id: 58, name: 'Мозаика', price: 99000 },
    { id: 59, name: 'Президент ролл', price: 79000 },
    { id: 60, name: 'Фила манго', price: 113000 },
    { id: 61, name: 'Golden Fish', price: 82000 },
    { id: 62, name: 'Ролл много рыбы', price: 105000 },
    { id: 63, name: 'Лосось нигири', price: 24000 },
    { id: 64, name: 'Угор нигири', price: 29000 },
    { id: 65, name: 'Копчёнйы лосось нигири', price: 25000 },
    { id: 66, name: 'Тунец нигири', price: 23000 },
    { id: 67, name: 'Креветка нигири', price: 21000 },
    { id: 68, name: 'Снежный лосось', price: 22000 },
    { id: 69, name: 'Сет Китана 92 шт', price: 969000 },
    { id: 70, name: 'Сет Биг Бен 58 шт', price: 519000 },
    { id: 71, name: 'Сет Салмон 50 шт', price: 449000 },
    { id: 72, name: 'Сет Якудза 46 шт', price: 359000 },
    { id: 73, name: 'Сет Корпоратив 44 шт', price: 359000 },
    { id: 74, name: 'Сет Mika Love 34 шт', price: 329000 },
    { id: 75, name: 'Сет Запечёный max 30 шт', price: 237000 },
    { id: 76, name: 'Сет Tsuki 30 шт', price: 239000 },
    { id: 77, name: 'Сет Детройт 26 шт', price: 217000 },
    { id: 78, name: 'Сет Жигар 26 шт', price: 179000 },
    { id: 79, name: 'Сет Ямомото 26 шт', price: 182000 },
    { id: 80, name: 'Сет Запечёный mini 18 шт', price: 149000 },
    { id: 81, name: 'Сет Кантан 18 шт', price: 132000 },
    { id: 82, name: 'Сяке терияки', price: 84000 },
    { id: 83, name: 'Лосось темпура', price: 109000 },
    { id: 84, name: 'Стейк из форели', price: 79000 },
    { id: 85, name: 'Жаровня с говядиной', price: 83000 },
    { id: 86, name: 'Гохан тонику', price: 89000 },
    { id: 87, name: 'Говядина в сливочном соусе', price: 93000 },
    { id: 88, name: 'Мёндонская курочка', price: 49000 },
    { id: 89, name: 'Курица по-тайски', price: 55000 },
    { id: 90, name: 'Тори дон', price: 59000 },
    { id: 91, name: 'Куриные крылья в соусе чилибум', price: 65000 },
    { id: 92, name: 'Куриные крылья в соусе чили', price: 65000 },
    { id: 93, name: 'Куриные крылья в медовом соусе', price: 65000 },
    { id: 94, name: 'Куриные крылья в хрустящей панировке', price: 55000 },
    { id: 95, name: 'Самоса с лососем', price: 35000 },
    { id: 96, name: 'Самоса из картофеля карри', price: 31000 },
    { id: 97, name: 'Удон с овощами', price: 39000 },
    { id: 98, name: 'Удон с курицей', price: 49000 },
    { id: 99, name: 'Удон с говяиной', price: 55000 },
    { id: 100, name: 'Удон с морепродуктами', price: 65000 },
    { id: 101, name: 'Корейский рамен с говядиной (острый)', price: 65000 },
    { id: 102, name: 'Рис с овощами', price: 35000 },
    { id: 103, name: 'Рис с курицей', price: 44000 },
    { id: 104, name: 'Рис с морепродуктами', price: 65000 },
    { id: 105, name: 'Уха по-китайски', price: 73000 },
    { id: 106, name: 'Сяке тядзуке', price: 59000 },
    { id: 107, name: 'Кимчи с курицей', price: 49000 },
    { id: 108, name: 'Суп Том Ям', price: 82000 },
    { id: 109, name: 'Мисо с лососем', price: 63000 },
    { id: 110, name: 'Рамён с курицей', price: 57000 },
    { id: 111, name: 'Рамён с говядиной', price: 65000 },
    { id: 112, name: 'Сливочный суп с курицей', price: 49000 },
    { id: 113, name: 'Омега-3 салат', price: 65000 },
    { id: 114, name: 'Морская жемчужина', price: 49000 },
    { id: 115, name: 'Гюнику сарада', price: 59000 },
    { id: 116, name: 'Цезарь с креветками', price: 79000 },
    { id: 117, name: 'Цезарь с курицей', price: 59000 },
    { id: 118, name: 'Фила сарада', price: 77000 },
    { id: 119, name: 'Салат греческий', price: 54000 },
    { id: 120, name: 'Чука сарада', price: 55000 },
    { id: 121, name: 'Кани сарада', price: 45000 },
    { id: 122, name: 'Салат из баклажанов', price: 61000 },
    { id: 123, name: 'Хлеб с копчёным сыром', price: 21000 },
    { id: 124, name: 'Хлеб с соусом тартар', price: 18000 },
    { id: 125, name: 'Катлама с соусом тартар', price: 29000 },
    { id: 126, name: 'Картофель фри', price: 23000 },
    { id: 127, name: 'Картофель по-деревенски с соусом фиш', price: 29000 },
    { id: 128, name: 'Рис', price: 17000 },
    { id: 129, name: 'Моти, 3 шт', price: 65000 },
    { id: 130, name: 'Шоко ролл, 8 шт', price: 54000 },
    { id: 131, name: 'Лаки ролл, 8 шт', price: 54000 },
    { id: 132, name: 'Сан-Себастьян ванильный', price: 39000 },
    { id: 133, name: 'Чизбургер', price: 39000 },
    { id: 134, name: 'Сэндвич классический', price: 47000 },
    { id: 135, name: 'Куриные наггетсы с пюре', price: 33000 },
    { id: 136, name: 'Мини корн-доги', price: 39000 },
    { id: 137, name: 'Сырные шарики', price: 34000 },
    { id: 138, name: 'Pepsi 1,75 л', price: 36000 },
    { id: 139, name: 'Pepsi 1 л', price: 22000 },
    { id: 140, name: 'Pepsi 0,5 л', price: 16000 },
    { id: 141, name: 'Pepsi 0,25 л', price: 13000 },
    { id: 142, name: 'Вода газ 0,5 л', price: 5000 },
    { id: 143, name: 'Вода газ 1 л', price: 10000 },
    { id: 144, name: 'Вода без газ 0,5 л', price: 5000 },
    { id: 145, name: 'Вода без газ 1 л', price: 10000 },
    { id: 146, name: 'Вода без газ 1,5 л', price: 15000 },
    { id: 147, name: 'Red Bull 250 мл', price: 27000 },
    { id: 148, name: 'Сок Viko ананас', price: 36000 },
    { id: 149, name: 'Сок Viko яблоко', price: 36000 },
    { id: 150, name: 'Сок Viko персик', price: 36000 },
    { id: 151, name: 'Сок Viko мультифрукт', price: 36000 },
    { id: 152, name: 'Сок Viko вишня', price: 36000 },
    { id: 153, name: 'Сок Viko апельсин', price: 36000 },
    { id: 154, name: 'палочка', price: 0 },
    { id: 155, name: 'Доп палочка', price: 1500 },
    { id: 156, name: 'Дощечка', price: 20000 },
    { id: 157, name: 'пакет', price: 2000 },
];

const branchesDB = [
    "ДЖИЗАК", "ДЖАРАРЫК", "АНДИЖАН", "МИРАБАД", "ХАЙ ТАУН", "ЮНУСАБАД-5",
    "АВИАТОР", "АБДУЛЛА КАХХАР", "САЙРАМ", "РИВЬЕРА", "САГБАН", "ФЕРГАНА",
    "ДЕПО МОЛЛ", "БУХАРА", "САМАРКАНД FAMILY PARK", "САМАРКАНД РУДАКИ",
    "СЕРГЕЛИ", "АФРОСИАБ", "УЧТЕПА", "КУЙЛЮК", "МЕГАПОЛИС", "АБАЯ", "НОВЗА",
    "СЕУЛ МУН", "ТАРАС ШЕВЧЕНКО", "БОТКИНА", "БАДАМЗАР", "ШОТА РУСТАВЕЛИ",
];

// --- ЛОГИКА ФИЛИАЛОВ ---
function showBranches() {
    const list = document.getElementById('branch-list');
    filterBranches('');
    list.classList.remove('hidden');
}

function filterBranches(query) {
    const list = document.getElementById('branch-list');
    list.innerHTML = '';
    const filtered = branchesDB.filter(b => b.toLowerCase().includes(query.toLowerCase()));

    if (filtered.length > 0) {
        filtered.forEach(branch => {
            const div = document.createElement('div');
            div.className = 'p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-0 text-sm transition-colors';
            div.innerText = branch;
            div.onclick = () => selectBranch(branch);
            list.appendChild(div);
        });
    } else {
        list.innerHTML = '<div class="p-3 text-gray-400 text-sm italic">Филиал не найден</div>';
    }
    list.classList.remove('hidden');
}

function selectBranch(name) {
    document.getElementById('branch_search').value = name;
    document.getElementById('selected_branch').value = name;
    document.getElementById('branch-list').classList.add('hidden');
    document.getElementById('branch-selected-msg').classList.remove('hidden');
    document.getElementById('branch-selected-msg').classList.add('flex');
    document.getElementById('branch-name-display').innerText = name;
}

// --- ЛОГИКА ТОВАРОВ ---
function searchProducts(query) {
    const results = document.getElementById('search-results');
    results.innerHTML = '';
    if (query.length < 1) { results.classList.add('hidden'); return; }

    const filtered = productsDB.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

    if (filtered.length > 0) {
        filtered.forEach(p => {
            const div = document.createElement('div');
            div.className = 'p-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center transition-colors';
            div.innerHTML = `
                    <span class="font-medium text-sm text-gray-700">${p.name}</span> 
                    <span class="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded text-xs whitespace-nowrap ml-2">${p.price.toLocaleString()}</span>
                `;
            div.onclick = () => addProduct(p);
            results.appendChild(div);
        });
        results.classList.remove('hidden');
    } else {
        results.innerHTML = '<div class="p-4 text-gray-400 text-sm text-center">Ничего не найдено</div>';
        results.classList.remove('hidden');
    }
}

function addProduct(product) {
    document.getElementById('search-results').classList.add('hidden');
    document.getElementById('product-search').value = '';
    document.getElementById('empty-cart-msg').classList.add('hidden');

    const tbody = document.getElementById('product-list');
    const tr = document.createElement('tr');
    tr.className = "group product-row animate-[fadeIn_0.3s_ease-out]";
    tr.setAttribute('data-id', product.id);

    // Верстка строки с поддержкой мобильного вида
    tr.innerHTML = `
            <td class="px-0 md:px-4 py-4 align-top w-full block md:table-cell border-b md:border-b-0 border-dashed border-gray-200 md:border-none">
                <div class="flex justify-between md:block">
                    <div class="font-medium text-gray-800 text-sm pr-2">${product.name}</div>
                    <button onclick="removeRow(this)" class="md:hidden text-red-400 p-1"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="mt-2 text-xs text-gray-400 flex items-center gap-2">
                     <i class="fa-regular fa-comment"></i>
                     <input type="text" class="bg-transparent border-b border-gray-200 outline-none w-full focus:border-blue-400 transition-colors product-comment" placeholder="Примечание...">
                </div>
                
                <div class="md:hidden flex items-center justify-between mt-3">
                     <div class="font-bold text-blue-600">${product.price.toLocaleString()}</div>
                     <div class="flex items-center bg-gray-100 rounded-lg">
                        <button onclick="updateQty(this, -1)" class="w-8 h-8 flex items-center justify-center text-gray-600 active:bg-gray-200 rounded-l-lg">-</button>
                        <input type="number" value="1" readonly class="w-8 text-center bg-transparent font-bold text-sm qty-input">
                        <button onclick="updateQty(this, 1)" class="w-8 h-8 flex items-center justify-center text-blue-600 active:bg-blue-100 rounded-r-lg">+</button>
                    </div>
                </div>
            </td>

            <td class="hidden md:table-cell px-2 py-4 align-top text-center">
                <div class="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg">
                    <button onclick="updateQty(this, -1)" class="px-2 py-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-l-lg transition">-</button>
                    <input type="number" value="1" min="1" class="w-8 text-center outline-none bg-transparent text-sm font-bold qty-input" readonly>
                    <button onclick="updateQty(this, 1)" class="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded-r-lg transition">+</button>
                </div>
            </td>

            <td class="hidden md:table-cell px-2 py-4 text-center align-top">
                 <input type="number" value="${product.price}" class="w-20 text-center border-b border-dashed border-gray-300 outline-none focus:border-blue-500 price-input bg-transparent text-sm" onchange="recalcRow(this)">
            </td>

            <td class="hidden md:table-cell px-4 py-4 text-right font-bold text-gray-800 align-top">
                <span class="total-item-display">${product.price.toLocaleString()}</span>
                <span class="total-item hidden">${product.price}</span> </td>

            <td class="hidden md:table-cell px-2 text-center align-top pt-4">
                <button onclick="removeRow(this)" class="w-8 h-8 rounded-full hover:bg-red-50 text-gray-300 hover:text-red-500 transition-all"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        `;
    tbody.appendChild(tr);
    recalcTotal();
}

function updateQty(btn, change) {
    // Находим input внутри того же контейнера (td или div)
    const wrapper = btn.closest('div'); // Ищем ближайший контейнер
    const row = btn.closest('tr'); // Ищем строку
    // Так как у нас есть мобильная и десктопная верстка в одном TR, нужно найти правильный input
    // В данном случае qty-input имеет уникальный класс внутри строки
    const input = row.querySelector('.qty-input');

    let newVal = parseInt(input.value) + change;
    if (newVal < 1) newVal = 1;

    // Обновляем все инпуты количества в этой строке (и скрытый мобильный, и десктопный, если бы они были раздельными)
    const allQtyInputsInRow = row.querySelectorAll('.qty-input');
    allQtyInputsInRow.forEach(inp => inp.value = newVal);

    recalcRow(btn);
}

function recalcRow(el) {
    const row = el.closest('tr');
    const qty = parseInt(row.querySelector('.qty-input').value);

    let price = 0;
    const priceInput = row.querySelector('.price-input');
    if (priceInput) {
        price = parseInt(priceInput.value);
    } else {
        price = parseInt(priceInput.value);
    }

    const sum = qty * price;

    // Обновляем отображение суммы
    row.querySelector('.total-item').innerText = sum;
    row.querySelector('.total-item-display').innerText = sum.toLocaleString();

    recalcTotal();
}

function removeRow(btn) {
    const row = btn.closest('tr');
    row.classList.add('opacity-0', 'transform', 'scale-95'); // Анимация удаления
    setTimeout(() => {
        row.remove();
        if (document.getElementById('product-list').children.length === 0) {
            document.getElementById('empty-cart-msg').classList.remove('hidden');
        }
        recalcTotal();
    }, 200);
}

function recalcTotal() {
    const discountPercent = parseInt(document.getElementById('discount_select').value);
    let subtotal = 0;
    let discountableSum = 0;

    const rows = document.querySelectorAll('#product-list .product-row');
    rows.forEach(row => {
        const id = parseInt(row.getAttribute('data-id'));
        const sum = parseInt(row.querySelector('.total-item').innerText);
        subtotal += sum;

        if (!NO_DISCOUNT_IDS.includes(id)) {
            discountableSum += sum;
        }
    });

    const discountAmount = Math.round(discountableSum * (discountPercent / 100));
    let deliveryCost = (document.getElementById('order_type').value === 'delivery' && subtotal > 0) ? 15000 : 0;
    const finalTotal = subtotal - discountAmount + deliveryCost;

    // Обновление UI
    document.getElementById('subtotal').innerText = subtotal.toLocaleString() + ' сум';

    const discRow = document.getElementById('discount-row');
    const discEl = document.getElementById('discount-amount');
    if (discountAmount > 0) {
        discEl.innerText = `-${discountAmount.toLocaleString()} сум`;
        discRow.classList.remove('hidden');
    } else {
        discRow.classList.add('hidden');
    }

    document.getElementById('delivery-cost').innerText = deliveryCost.toLocaleString() + ' сум';

    const formattedTotal = finalTotal.toLocaleString() + ' сум';
    document.getElementById('total-sum').innerText = formattedTotal;
    document.getElementById('mobile-total-sum').innerText = formattedTotal;
}

function setOrderType(type) {
    document.getElementById('order_type').value = type;
    const del = document.getElementById('delivery-section');
    const pick = document.getElementById('pickup-section');
    const dBtn = document.getElementById('btn-delivery');
    const pBtn = document.getElementById('btn-pickup');
    const discountSelect = document.getElementById('discount_select');

    if (type === 'delivery') {
        del.classList.remove('hidden'); pick.classList.add('hidden');

        dBtn.className = "flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-semibold shadow-sm bg-white text-gray-800 transition-all duration-200";
        pBtn.className = "flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all duration-200";

        if (discountSelect.value === '15') discountSelect.value = '0';
    } else {
        pick.classList.remove('hidden'); del.classList.add('hidden');

        pBtn.className = "flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-semibold shadow-sm bg-white text-gray-800 transition-all duration-200";
        dBtn.className = "flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all duration-200";

        discountSelect.value = '15';
    }
    recalcTotal();
}

// --- TELEGRAM ---
function sendToTelegram() {
    const name = document.getElementById('client_name');
    const phone = document.getElementById('client_phone');
    const rows = document.querySelectorAll('#product-list tr');

    let hasError = false;

    if (!name.value.trim()) {
        name.classList.add('border-red-500', 'bg-red-50');
        hasError = true;
    } else {
        name.classList.remove('border-red-500', 'bg-red-50');
    }

    if (!phone.value.trim() || phone.value.length < 13) {
        phone.classList.add('border-red-500', 'bg-red-50');
        hasError = true;
    } else {
        phone.classList.remove('border-red-500', 'bg-red-50');
    }

    if (hasError) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (rows.length === 0) { alert('Корзина пуста! Добавьте товары.'); return; }

    const orderDesc = document.getElementById('order_description').value;
    const type = document.getElementById('order_type').value;
    const paymentMethod = document.getElementById('payment_method').value;

    const totalSum = document.getElementById('total-sum').innerText;
    const subtotal = document.getElementById('subtotal').innerText;
    const discountText = document.getElementById('discount-amount').innerText;
    const deliveryText = document.getElementById('delivery-cost').innerText;

    let msg = `🔥 <b>НОВЫЙ ЗАКАЗ</b>\n\n👤 <b>${name.value}</b> ${phone.value}\n`;

    if (type === 'delivery') {
        const addr = document.getElementById('address_full').value || 'Не указан';
        const h = document.getElementById('addr_house').value ? `, д.${document.getElementById('addr_house').value}` : '';
        const k = document.getElementById('addr_kv').value ? `, кв.${document.getElementById('addr_kv').value}` : '';
        const f = document.getElementById('addr_floor').value ? `, эт.${document.getElementById('addr_floor').value}` : '';
        msg += `🚚 <b>Доставка:</b> ${addr}${h}${k}${f}\n`;
    } else {
        const branch = document.getElementById('selected_branch').value || 'Не выбран';
        msg += `🏃 <b>Самовывоз:</b> ${branch}\n`;
    }

    msg += `💳 <b>Оплата:</b> ${paymentMethod}\n`;
    if (orderDesc) msg += `💬 <b>Комментарий:</b> <i>${orderDesc}</i>\n`;

    msg += `\n🛒 <b>Состав заказа:</b>\n`;

    rows.forEach(row => {
        const title = row.querySelector('.font-medium').innerText;
        const prodComment = row.querySelector('.product-comment').value;
        const qty = row.querySelector('.qty-input').value;
        const price = row.querySelector('.price-input').value;
        const sum = row.querySelector('.total-item').innerText;

        msg += `- ${title} (${qty} x ${price}) = ${sum}\n`;
        if (prodComment) msg += `  └ <i>${prodComment}</i>\n`;
    });

    msg += `\n💵 Товары: ${subtotal}`;
    const discVal = document.getElementById('discount_select').value;
    if (discVal !== '0') msg += `\n📉 Скидка: ${discountText} (${discVal}%)`;
    if (deliveryText !== '0 сум') msg += `\n🚚 Доставка: ${deliveryText}`;
    msg += `\n\n💰 <b>ИТОГО К ОПЛАТЕ: ${totalSum}</b>`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: msg, parse_mode: 'HTML' })
    }).then(r => {
        if (r.ok) {
            alert('Заказ успешно отправлен!');
            location.reload();
        } else {
            alert('Ошибка отправки.');
        }
    });
}

// --- ДОБАВЛЕНИЕ ОБЯЗАТЕЛЬНЫХ ТОВАРОВ ---
function initializeDefaultItems() {
    const chopsticks = productsDB.find(p => p.id === 154); // палочка
    const bag = productsDB.find(p => p.id === 157);       // пакет

    if (chopsticks) {
        addProduct(chopsticks);
    }
    if (bag) {
        addProduct(bag);
    }
}

// --- ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ---
document.addEventListener('DOMContentLoaded', (e) => {
    // Добавление обязательных товаров (палочка и пакет)
    initializeDefaultItems();

    // Инициализация типа заказа (должна быть после добавления товаров для корректного пересчета)
    setOrderType(document.getElementById('order_type').value);
});

// Закрытие списков при клике вне
document.addEventListener('click', (e) => {
    if (!e.target.closest('#branch-list') && !e.target.closest('#branch_search')) {
        document.getElementById('branch-list').classList.add('hidden');
    }
    if (!e.target.closest('#search-results') && !e.target.closest('#product-search')) {
        document.getElementById('search-results').classList.add('hidden');
    }
});