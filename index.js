var weight = document.getElementById("berat-badan")
var age = document.getElementById("usia-tahun")
var height = document.getElementById("tinggi-badan")
var male = document.getElementById('pria')
var female = document.getElementById('perempuan')


let btn = document.getElementById('cekhasil')

// Mengecek Input Field Apakah Sudah Terisi atau Belum
function calculate(){
    if(weight.value=='' || height.value=='' || age.value==''){ (male.checked==false && female.checked==false)
    alert('Harap isi semua kolom untuk mengecek hasil BMI')
    } else {
        cekHasil();
    }
}

// Menghitung Nilai BMI
function cekHasil(){
    var all = [weight.value, height.value, age.value]
    if(male.checked){
        all.push("Laki-Laki")
    } else if(female.checked){
        all.push("Perempuan")
    }
    var bmi = Number(all[0])/(Number(all[1])/100*Number(all[1])/100)

    var hasil = "";
    if(bmi < 18.5){
        // Apabila  Nilai BMI < 18.5
        hasil = "Kekurangan Berat Badan"
    } else if(bmi >= 18.5 && bmi <= 24.9){
        // Apabila Nilai BMI >= 18.5 dan BMI <= 24.9
        hasil = "Normal (Ideal)"
    } else if(bmi >= 25 && bmi <= 29.9){
        // Apabila Nilai BMI >= 25 dan BMI <= 29.9
        hasil = "Kelebihan Berat Badan"
    } else if (bmi >= 30){
        // Apabila Nilai BMI >= 30
        hasil = "Kegemukan (Obesitas)"
    }
}