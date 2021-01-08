import { FormControl } from "@angular/forms";

export function restrictedWords(words)
  {
    if (!words) return null;

  return function (control: FormControl): { [key: string]: any } {
    var invalidWords = words.map( e=> control.value.includes(e)?e:null ).filter(e=> e!=null)

    return invalidWords && invalidWords.length>0 ? { restrictedWords: invalidWords.join(',') } : null;
  }
}
