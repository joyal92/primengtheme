// src/app/presets/my-preset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export default definePreset(Aura, { // Extend Aura or your chosen base preset
  semantic: {
    primary: {
      color: '{blue.500}', // Example: Change primary color
      hoverColor: '{blue.600}',
      // Add other semantic tokens as needed
    },
    // Customize other semantic tokens
  },
  components: {
    checkbox: {
      // Customize checkbox-specific tokens
      box: {
        background: '{surface.200}', // Example: Change checkbox background
        borderColor: '{surface.400}',
        hoverBackground: '{surface.300}',
        checkedBackground: '{primary.color}',
        checkedBorderColor: '{primary.color}',
      },
      icon: {
        color: '{surface.0}', // Example: Change check icon color
        checkedColor: '{surface.0}',
        size: '1rem', // Example: Change icon size
      },
      // Add other checkbox tokens as needed
    },
  },
});