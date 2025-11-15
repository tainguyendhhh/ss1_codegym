

function tong() {
    let diemToan= +document.getElementById("diemtoan").value;
    let diemHoa= +document.getElementById("diemhoa").value;
    let diemSinh= +document.getElementById("diemsinh").value;
    let tBinh= (diemToan+ diemSinh+diemHoa)/3;
    let tong1= (diemToan+ diemSinh+diemHoa);
    document.getElementById("result").innerHTML=`tổng: `+tong1;
    document.getElementById("result1").innerHTML=`tb: `+tBinh;

}
