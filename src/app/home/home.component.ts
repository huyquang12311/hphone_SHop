import { Component,ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slide =[
    {img :"https://congngheviet.com/wp-content/uploads/2022/09/Hinh-nen-iPhone-14-gradient01.png"},
    {img :"https://image.vtc.vn/resize/th/upload/2022/12/03/iphone14promaxreview9phuonglam-07160980.jpg"},
    {img :"https://congngheviet.com/wp-content/uploads/2022/09/Hinh-nen-iPhone-14-gradient01.png"},
  ]


  handleSlideEvent(event: any) {
    const activeSlideIndex = event.to;
    console.log('Đã chuyển đến slide số:', activeSlideIndex);
  }
}
