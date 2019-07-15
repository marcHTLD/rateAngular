import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'StarPipe'
})
export class StarPipe implements PipeTransform {
   transform(rating : number) : string {
      switch(rating){
          case 1:
          return 'star star_border star_border star_border star_border';
          break;
          case 2:
          return 'star star star_border star_border star_border';
          break;
          case 3:
          return 'star star star star_border star_border';
          break;
          case 4:
          return 'star star star star star_border';
          break;
          case 5:
          return 'star star star star star';
          break;
      }
   }
}