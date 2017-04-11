import { Print } from './mockprints.service'

export const PRINTS: Print[] = [
    {PrintId: 1, 
        Name: "3D Benchy", 
        SourceUrl: "http://www.thingiverse.com/thing:763622", 
        ModelPath: "", 
        Success: true, 
        PrintTimeMinutes: 125, 
        MainPrintImageUrl: "assets/images/benchy.JPG", 
        FilamentName: "Hatchbox PLA (Gray) - Spool 3", 
        PrinterName:"Maker Select - Printer 1", 
        UserId:1},
    {PrintId: 2, 
        Name: "Fidget spinner", 
        SourceUrl: "http://www.thingiverse.com/thing:763622", 
        ModelPath: "", 
        Success: true, 
        PrintTimeMinutes: 125, 
        MainPrintImageUrl: "assets/images/benchy.JPG", 
        FilamentName: "Hatchbox PLA (Gray) - Spool 3", 
        PrinterName:"Maker Select - Printer 1", 
        UserId:1},
    {PrintId: 3, 
        Name: "Baby groot", 
        SourceUrl: "http://www.thingiverse.com/thing:763622", 
        ModelPath: "", 
        Success: true, 
        PrintTimeMinutes: 125, 
        MainPrintImageUrl: "assets/images/benchy.JPG", 
        FilamentName: "Hatchbox PLA (Gray) - Spool 3", 
        PrinterName:"Maker Select - Printer 1", 
        UserId:1},
    {PrintId: 4, 
        Name: "Spool Holder", 
        SourceUrl: "http://www.thingiverse.com/thing:763622", 
        ModelPath: "", 
        Success: true, 
        PrintTimeMinutes: 125, 
        MainPrintImageUrl: "assets/images/benchy.JPG", 
        FilamentName: "Inland PETG (Black) - Spool 4", 
        PrinterName:"Maker Select - Printer 1", 
        UserId:1},
    {PrintId: 4, 
        Name: "Ninja Stars", 
        SourceUrl: "http://www.thingiverse.com/thing:763622", 
        ModelPath: "", 
        Success: true, 
        PrintTimeMinutes: 125, 
        MainPrintImageUrl: "assets/images/benchy.JPG", 
        FilamentName: "Monoprice PLA (White) - Spool 1", 
        PrinterName: "Maker Select - Printer 1", 
        UserId:1}   
]

export const FILAMENTS: string[] = [
    "Monoprice PLA (White) - Spool 1",
    "Hatchbox PLA (Gray) - Spool 3",
    "Inland PETG (Black) - Spool 4",
]

export const PRINTERS: string[] = [
    "Maker Select - Printer 1"
]