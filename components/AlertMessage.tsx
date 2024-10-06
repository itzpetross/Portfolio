import Swal,{SweetAlertIcon} from "sweetalert2";
import 'animate.css';

export function AlertMessage(icon:SweetAlertIcon,text:string){
    const Toast = Swal.mixin({
        toast:true,
        position:"top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showClass: {
            popup: `
              animate__animated
              animate__bounceInRight
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__bounceOutRight
              animate__faster
            `
          }
    });

    Toast.fire({
        icon:icon,
        title:text
    });
}