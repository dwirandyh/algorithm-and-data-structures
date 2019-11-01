// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
Fungsi slice untuk mengambil item array contoh array [1,2,3] -> slice(1,2) = [2, 3]

Step-step algoritma
Contoh array [1, 2, 3, 4], nilai pembagian 2
Buat variable untuk index yang jadi patokan index dari slicenya
while index kurang dari panjang array
    
    Looping pertama
        ambil sliced = array.slice(0, 0 + 2) 
        sliced (1, 2)
        push sliced ke result
        index = index(0) + size(2)
    
    Looping kedua 
        ambil sliced = array.slice(2, 4)
        sliced (3, 4)
        push sliced ke result
        index = index(2) + size(2)
*/
function chunk(array, size) {
  const result = [];
  let index = 0;

  while (index < array.length) {
    const sliced = array.slice(index, index + size);
    result.push(sliced);
    index = index + size;
  }

  return result;
}

/*
Looping setiap array
ambil array terakhir contoh [[1,2],[3]] -> [3]
jika array terakhir tidak kosong atau array terakhir itemnya === size (soal)
    push array baru contoh [[1,2], [3, 4]] -> [[1,2], [3, 4], [5]]
selain itu
    tambahkan item ke array terakhir [[1, 2], [3]] -> [[1, 2], [3, 4]]
*/
function chunkWithoutSlice(array, size) {
  const result = [];

  for (var i = 0; i < array.length; i++) {
    var last = result[result.length - 1]; // mengambil nilai array terakhir

    if (!last || last.length === size) {
      // cek apakah last array nya tidak null dan panjang dari last array nya sesuai dengan size/pembagian
      // push array baru ke dalam result
      result.push([array[i]]);
    } else {
      // push nilai ke array terakhir
      last.push(array[i]);
    }
  }
  return result;
}

module.exports = chunk;
