tanya = true;

while (tanya) {
  user = prompt("silahkan pilih angka dari 1 - 10");

  var comp = Math.random();
  if (comp < 0.11) {
    comp = 1;
  } else if (comp >= 0.11 && comp < 0.21) {
    comp = 2;
  } else if (comp >= 0.21 && comp < 0.31) {
    comp = 3;
  } else if (comp >= 0.31 && comp < 0.41) {
    comp = 4;
  } else if (comp >= 0.41 && comp < 0.51) {
    comp = 5;
  } else if (comp >= 0.51 && comp < 0.61) {
    comp = 6;
  } else if (comp >= 0.61 && comp < 0.71) {
    comp = 7;
  } else if (comp >= 0.71 && comp < 0.81) {
    comp = 8;
  } else if (comp >= 0.81 && comp < 0.91) {
    comp = 9;
  } else {
    comp = 10;
  }

  for (nyawa = 2; comp != user; nyawa--) {
    if (nyawa > 0) {
      if (user > comp) {
        user = prompt("Terlalu Besar\nKesempatan Kamu " + nyawa + "\nSilahkan pilih ulang");
      } else if (user < comp) {
        user = prompt("Kurang Besar\nKesempatan Kamu " + nyawa + "\nSilahkan pilih ulang");
      }
    } else {
      alert("Maaf Kamu GAGAL!\nAngka yang di maksud adalah" + comp);
      break;
    }
  }

  if (user == comp) {
    alert("Selamat Kamu BENAR\nAngka yang di maksud adalah " + comp);
  }

  tanya = confirm("Apakah kamu ingin mengulanginnya ?");
}
