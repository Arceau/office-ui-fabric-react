import * as React from 'react';
import { Persona } from './Persona';
export interface IPersonaProps extends React.HTMLProps<Persona> {
    /**
     * Primary text to display, usually the name of the person.
     */
    primaryText?: string;
    /**
     * Decides the size of the control.
     * @defaultvalue PersonaSize.regular
     */
    size?: PersonaSize;
    /**
     * If true, adds the css class 'is-fadeIn' to the image.
     */
    imageShouldFadeIn?: boolean;
    /**
     * Url to the image to use, should be a square aspect ratio and big enough to fit in the image area.
     */
    imageUrl?: string;
    /**
     * The user's initials to display in the image area when there is no image.
     */
    imageInitials?: string;
    /**
     * The background color when the user's initials are displayed.
     * @defaultvalue PersonaInitialsColor.blue
     */
    initialsColor?: PersonaInitialsColor;
    /**
     * Presence of the person to display - will not display presence if undefined.
     * @defaultvalue PersonaPresence.none
     */
    presence?: PersonaPresence;
    /**
     * Secondary text to display, usually the role of the user.
     */
    secondaryText?: string;
    /**
     * Tertiary text to display, usually the status of the user.
     */
    tertiaryText?: string;
    /**
     * Optional text to display, usually a custom message set.
     */
    optionalText?: string;
    /**
     * Whether to not render persona details, and just render the persona image/initials.
     */
    hidePersonaDetails?: boolean;
    /**
     * Additional CSS class(es) to apply to the Persona
     */
    className?: string;
}
export declare enum PersonaSize {
    tiny = 0,
    extraSmall = 1,
    small = 2,
    regular = 3,
    large = 4,
    extraLarge = 5,
}
export declare enum PersonaPresence {
    none = 0,
    offline = 1,
    online = 2,
    away = 3,
    dnd = 4,
    blocked = 5,
    busy = 6,
}
export declare enum PersonaInitialsColor {
    lightBlue = 0,
    blue = 1,
    darkBlue = 2,
    teal = 3,
    lightGreen = 4,
    green = 5,
    darkGreen = 6,
    lightPink = 7,
    pink = 8,
    magenta = 9,
    purple = 10,
    black = 11,
    orange = 12,
    red = 13,
    darkRed = 14,
}
