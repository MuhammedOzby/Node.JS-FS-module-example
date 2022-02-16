# FS File System Modülü

Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
- Bu veriyi okuyalım. (READ)
- Bu veriyi güncelleyelim.
- Dosyayı silelim.

***

## Create fonksiyonu

```javascript
function create(file, data, charset) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, charset, (err) => {
      reject(err);
    });
    resolve(true);
  });
}
```

## Read fonksiyonu

```javascript
function read(file, charset) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, charset, (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
}
```

## Update fonksiyonu

Burada JSON objesini güncellemek yerine öylesine append kullandım. Orjinalde JSON objesini çeker ana objeye ekler. Dosyaya yeni objeyi baştan yazardım.

```javascript
function update(file, charset, appendData) {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, appendData, charset, (err) => {
      if (err) reject(err);
    });
    resolve(true);
  });
}
```

## Delete fonksiyonu

```javascript
function removeFile(file) {
  return new Promise((resolve, reject) => {
    fs.unlink(file, (err) => {
      if (err) console.log(err);
    });
    resolve(true);
  });
}
```
