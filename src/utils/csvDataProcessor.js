export const processCSVData = (data) => {
    const headers = Object.keys(data[0] || {});
    
    if (headers.length === 0) {
        alert('CSV dosyası boş!');
        return null;
    }

    return data.map((item) => ({
        name: item[headers[0]],
        ...headers.slice(1).reduce((acc, header) => ({
            ...acc,
            [header]: parseFloat(item[header]) || 0
        }), {})
    }));
};