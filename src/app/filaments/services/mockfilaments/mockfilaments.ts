import { FilamentLibraryView, FilamentDetailView, FilamentColor, FilamentMaterial } from './mockfilaments.service';

export const FILAMENTLIBRARY: FilamentLibraryView[] = [
    {
        FilamentId: 1,
        UserId: 1,
        UserFilamentId: 1,
        Material: "PLA",
        Brand: "Monoprice",
        Color: "Purple"
    },
    {
        FilamentId: 2,
        UserId: 1,
        UserFilamentId: 2,
        Material: "PLA",
        Brand: "Hatchbox",
        Color: "Blue",
    },
    {
        FilamentId: 3,
        UserId: 1,
        UserFilamentId: 4,
        Material: "PETG",
        Brand: "Inland",
        Color: "Black",
    }
]

export const FILAMENTDETAILS: FilamentDetailView[] = [
    {
        FilamentId: 1,
        UserId: 1,
        UserFilamentId: 1,
        Material: "PLA",
        Brand: "Monoprice",
        Color: "Purple",
        LengthRemain: 100,
        DateAcquired: new Date("4/3/2017"),
        Source: "Monoprice",
        Prints: [ 
            { PrintId: 1, Name: "3D Benchy", MainPrintImageUrl: "assets/images/benchy.JPG"}, 
            { PrintId: 2, Name: "Fidget Spinner", MainPrintImageUrl: "assets/images/benchy.JPG"}
        ],
    },
    {
        FilamentId: 2,
        UserId: 1,
        UserFilamentId: 2,
        Material: "PLA",
        Brand: "Hatchbox",
        Color: "Blue",
        LengthRemain: 100,
        DateAcquired: new Date("4/3/2017"),
        Source: "Microcenter",
        Prints: undefined
    },
    {
        FilamentId: 3,
        UserId: 1,
        UserFilamentId: 3,
        Material: "PETG",
        Brand: "Inland",
        Color: "Black",
        LengthRemain: 100,
        DateAcquired: new Date("4/3/2017"),
        Source: "Microcenter",
        Prints: undefined
    }
]

export const FILAMENTCOLORS: FilamentColor[] = [
    {
        Color: "Blue",
        ColorId: 1
    },
    {
        Color: "Black",
        ColorId: 2
    },
    {
        Color: "Purple",
        ColorId: 3
    }
]

export const FILAMENTMATERIALS: FilamentMaterial[] = [
    {
        Material: "PLA",
        MaterialId: 1
    },
    {
        Material: "PETG",
        MaterialId: 2
    }
]