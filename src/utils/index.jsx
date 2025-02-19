export const calculateResults = (standartPedCounterVal, testData) => {
  const charMap = {
    ı: 'i',
    İ: 'I',
    ğ: 'g',
    Ğ: 'G',
    ü: 'u',
    Ü: 'U',
    ş: 's',
    Ş: 'S',
    ö: 'o',
    Ö: 'O',
    ç: 'c',
    Ç: 'C',
  };

  const productKeyCache = new Map();

  const toProductKey = (title) => {
    if (productKeyCache.has(title)) {
      return productKeyCache.get(title);
    }

    const normalized = title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '')
      .replace(/[ıİğĞüÜşŞöÖçÇ]/g, (ch) => charMap[ch] || ch);
    productKeyCache.set(title, normalized);
    return normalized;
  };

  const resultMap = new Map();

  testData.products.forEach((product) => {
    const productKey = toProductKey(product.title);

    product.subProducts.forEach((subProduct) => {
      const subProductKey = subProduct.name.replace(/\s+/g, '_');
      const fullKey = `${productKey}_${subProductKey}`;

      const count = standartPedCounterVal[fullKey] || 0;

      if (count > 0) {
        if (!resultMap.has(product.title)) {
          resultMap.set(product.title, {
            title: product.title.replace(/beije/gi, '').trim(),
            subProducts: [],
          });
        }

        resultMap.get(product.title).subProducts.push({
          name: subProduct.name,
          result: subProduct.price * count,
          amount: count,
        });
      }
    });
  });

  const finalResults = [];
  testData.products.forEach((product) => {
    const entry = resultMap.get(product.title);
    if (entry) {
      finalResults.push(entry);
    }
  });

  return finalResults;
};

export const formatString = (product, name) => {
  const turkishToEnglish = (str) => str.replace(/\s+/g, '').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/Ğ/g, 'G').replace(/Ü/g, 'U').replace(/Ş/g, 'S').replace(/İ/g, 'I').replace(/Ö/g, 'O').replace(/Ç/g, 'C');
  return `${turkishToEnglish(product)}_${name.replace(/\s+/g, '_')}`;
};
