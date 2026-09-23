import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  ArrowUpRight, 
  Plus, 
  Trash2, 
  Check, 
  Sliders, 
  Copy, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Maximize2,
  RefreshCw,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export interface ProductPane {
  hardware: 'fixed' | 'tilt_turn' | 'tilt' | 'turn_active' | 'turn_passive';
  openingDirection?: 'left' | 'right';
  glazed?: boolean;
  mullionMid?: boolean;
  lowerThermoPanel?: boolean;
  isBalcony?: boolean;
  passive?: boolean;
}

export interface ProductTemplate {
  id: string;
  pav: string;
  name: string;
  category: '1_dalis' | '2_dalys' | '3_dalys' | 'balkonas' | 'durys';
  categoryLabel: string;
  defaultWidth: number;
  defaultHeight: number;
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  structure: {
    division?: { type: 'vertical' | 'horizontal'; parts: number };
    panes: ProductPane[];
  };
}

export interface BasketItem {
  id: string;
  templateId: string;
  templateName: string;
  width: number;
  height: number;
  energyClass: 'A' | 'A++';
  glazing: 'double' | 'triple';
  openingDirection: 'template' | 'left' | 'right';
  colorType: 'white' | 'exterior' | 'both';
  colorLabel: string;
  colorHex: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

// 14 Original Templates from termolangai.lt
export const PRODUCT_TEMPLATES: ProductTemplate[] = [
  {
    id: '1',
    pav: '1',
    name: '1 dalies langas N',
    category: '1_dalis',
    categoryLabel: '1 dalies langai',
    defaultWidth: 1000,
    defaultHeight: 1400,
    minWidth: 400,
    maxWidth: 2600,
    minHeight: 400,
    maxHeight: 2400,
    structure: {
      division: { type: 'vertical', parts: 1 },
      panes: [{ hardware: 'fixed', glazed: true }]
    }
  },
  {
    id: '2',
    pav: '2',
    name: '1 dalies langas V',
    category: '1_dalis',
    categoryLabel: '1 dalies langai',
    defaultWidth: 1000,
    defaultHeight: 1400,
    minWidth: 450,
    maxWidth: 1600,
    minHeight: 450,
    maxHeight: 2200,
    structure: {
      division: { type: 'vertical', parts: 1 },
      panes: [{ hardware: 'tilt_turn', openingDirection: 'right', glazed: true }]
    }
  },
  {
    id: '1002',
    pav: '3',
    name: '1 dalies langas A',
    category: '1_dalis',
    categoryLabel: '1 dalies langai',
    defaultWidth: 1000,
    defaultHeight: 600,
    minWidth: 450,
    maxWidth: 2200,
    minHeight: 400,
    maxHeight: 1400,
    structure: {
      division: { type: 'vertical', parts: 1 },
      panes: [{ hardware: 'tilt', glazed: true }]
    }
  },
  {
    id: '11',
    pav: '4',
    name: '2 dalių langas P',
    category: '2_dalys',
    categoryLabel: '2 dalių langai',
    defaultWidth: 1460,
    defaultHeight: 1420,
    minWidth: 800,
    maxWidth: 3200,
    minHeight: 500,
    maxHeight: 2400,
    structure: {
      division: { type: 'vertical', parts: 2 },
      panes: [{ hardware: 'fixed', glazed: true }, { hardware: 'fixed', glazed: true }]
    }
  },
  {
    id: '3',
    pav: '5',
    name: '2 dalių langas V|N',
    category: '2_dalys',
    categoryLabel: '2 dalių langai',
    defaultWidth: 1460,
    defaultHeight: 1420,
    minWidth: 900,
    maxWidth: 2600,
    minHeight: 500,
    maxHeight: 2200,
    structure: {
      division: { type: 'vertical', parts: 2 },
      panes: [
        { hardware: 'fixed', glazed: true },
        { hardware: 'tilt_turn', openingDirection: 'right', glazed: true }
      ]
    }
  },
  {
    id: '4',
    pav: '6',
    name: '2 dalių langas V|V',
    category: '2_dalys',
    categoryLabel: '2 dalių langai',
    defaultWidth: 1500,
    defaultHeight: 1420,
    minWidth: 1000,
    maxWidth: 2800,
    minHeight: 500,
    maxHeight: 2200,
    structure: {
      division: { type: 'vertical', parts: 2 },
      panes: [
        { hardware: 'tilt_turn', openingDirection: 'left', glazed: true },
        { hardware: 'tilt_turn', openingDirection: 'right', glazed: true }
      ]
    }
  },
  {
    id: '5',
    pav: '7',
    name: '2 dalių langas A|V',
    category: '2_dalys',
    categoryLabel: '2 dalių langai',
    defaultWidth: 1500,
    defaultHeight: 1420,
    minWidth: 1000,
    maxWidth: 2600,
    minHeight: 500,
    maxHeight: 2200,
    structure: {
      division: { type: 'vertical', parts: 2 },
      panes: [
        { hardware: 'tilt', glazed: true },
        { hardware: 'tilt_turn', openingDirection: 'right', glazed: true }
      ]
    }
  },
  {
    id: '6',
    pav: '8',
    name: '3 dalių langas N|V|N',
    category: '3_dalys',
    categoryLabel: '3 dalių langai',
    defaultWidth: 2100,
    defaultHeight: 1420,
    minWidth: 1500,
    maxWidth: 3600,
    minHeight: 500,
    maxHeight: 2200,
    structure: {
      division: { type: 'vertical', parts: 3 },
      panes: [
        { hardware: 'fixed', glazed: true },
        { hardware: 'tilt_turn', openingDirection: 'right', glazed: true },
        { hardware: 'fixed', glazed: true }
      ]
    }
  },
  {
    id: '1006',
    pav: '9',
    name: '3 dalių langas V|N|V',
    category: '3_dalys',
    categoryLabel: '3 dalių langai',
    defaultWidth: 2100,
    defaultHeight: 1420,
    minWidth: 1600,
    maxWidth: 3600,
    minHeight: 500,
    maxHeight: 2200,
    structure: {
      division: { type: 'vertical', parts: 3 },
      panes: [
        { hardware: 'tilt_turn', openingDirection: 'left', glazed: true },
        { hardware: 'fixed', glazed: true },
        { hardware: 'tilt_turn', openingDirection: 'right', glazed: true }
      ]
    }
  },
  {
    id: '8',
    pav: '10',
    name: 'Balkono durys (stiklas)',
    category: 'balkonas',
    categoryLabel: 'Balkono durys',
    defaultWidth: 850,
    defaultHeight: 2100,
    minWidth: 650,
    maxWidth: 1100,
    minHeight: 1800,
    maxHeight: 2400,
    structure: {
      division: { type: 'vertical', parts: 1 },
      panes: [{ hardware: 'tilt_turn', openingDirection: 'right', glazed: true, isBalcony: true }]
    }
  },
  {
    id: '1008',
    pav: '11',
    name: 'Balkono durys (su įkirtimu)',
    category: 'balkonas',
    categoryLabel: 'Balkono durys',
    defaultWidth: 850,
    defaultHeight: 2100,
    minWidth: 650,
    maxWidth: 1100,
    minHeight: 1800,
    maxHeight: 2400,
    structure: {
      division: { type: 'vertical', parts: 1 },
      panes: [{ hardware: 'tilt_turn', openingDirection: 'right', glazed: true, mullionMid: true, isBalcony: true }]
    }
  },
  {
    id: '2008',
    pav: '12',
    name: 'Balkono durys (su termo plokšte)',
    category: 'balkonas',
    categoryLabel: 'Balkono durys',
    defaultWidth: 850,
    defaultHeight: 2100,
    minWidth: 650,
    maxWidth: 1100,
    minHeight: 1800,
    maxHeight: 2400,
    structure: {
      division: { type: 'vertical', parts: 1 },
      panes: [{ hardware: 'tilt_turn', openingDirection: 'right', glazed: true, lowerThermoPanel: true, isBalcony: true }]
    }
  },
  {
    id: '7',
    pav: '13',
    name: 'Lauko durys vienvėrės',
    category: 'durys',
    categoryLabel: 'Lauko durys',
    defaultWidth: 950,
    defaultHeight: 2100,
    minWidth: 750,
    maxWidth: 1250,
    minHeight: 1850,
    maxHeight: 2350,
    structure: {
      division: { type: 'vertical', parts: 1 },
      panes: [{ hardware: 'turn_active', openingDirection: 'right', glazed: true }]
    }
  },
  {
    id: '10',
    pav: '14',
    name: 'Lauko durys dvivėrės',
    category: 'durys',
    categoryLabel: 'Lauko durys',
    defaultWidth: 1600,
    defaultHeight: 2100,
    minWidth: 1300,
    maxWidth: 2200,
    minHeight: 1850,
    maxHeight: 2350,
    structure: {
      division: { type: 'vertical', parts: 2 },
      panes: [
        { hardware: 'turn_active', openingDirection: 'left', glazed: true },
        { hardware: 'turn_passive', openingDirection: 'right', glazed: true, passive: true }
      ]
    }
  }
];

export const COLOR_OPTIONS = [
  { id: 'balta', label: 'Balta (RAL 9016)', type: 'white' as const, hex: '#FFFFFF', desc: 'Standartinė' },
  { id: 'antracitas', label: 'Antracitas (RAL 7016)', type: 'exterior' as const, hex: '#2B2E35', desc: 'Populiariausia' },
  { id: 'azuolas_auks', label: 'Auksinis ąžuolas', type: 'exterior' as const, hex: '#9E6833', desc: 'Medžio tekstūra' },
  { id: 'azuolas_tams', label: 'Tamsus ąžuolas', type: 'both' as const, hex: '#4C3424', desc: 'Abiejų pusių' },
  { id: 'riesutas', label: 'Riešutas', type: 'both' as const, hex: '#583E2E', desc: 'Prabangus tamsus' }
];

interface CalculatorProps {
  onOpenQuoteModal: (initialNote?: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenQuoteModal }) => {
  // State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('2'); // Default: 1 dalies langas V
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(1400);
  const [energyClass, setEnergyClass] = useState<'A' | 'A++'>('A++');
  const [glazing, setGlazing] = useState<'double' | 'triple'>('triple');
  const [openingDirection, setOpeningDirection] = useState<'template' | 'left' | 'right'>('template');
  const [colorOption, setColorOption] = useState<typeof COLOR_OPTIONS[0]>(COLOR_OPTIONS[1]); // Antracitas
  const [colorCoverage, setColorCoverage] = useState<'white' | 'exterior' | 'both'>('exterior');
  const [quantity, setQuantity] = useState<number>(1);
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const mainCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Active template
  const currentTemplate = useMemo(() => {
    return PRODUCT_TEMPLATES.find(t => t.id === selectedTemplateId) || PRODUCT_TEMPLATES[1];
  }, [selectedTemplateId]);

  // Synchronize default dimensions when template changes
  const handleTemplateSelect = (template: ProductTemplate) => {
    setSelectedTemplateId(template.id);
    setWidth(template.defaultWidth);
    setHeight(template.defaultHeight);
    setOpeningDirection('template');
  };

  // Synchronize Glazing when Energy Class changes (A++ strictly enforces 3-pane selective glass)
  const handleEnergyClassChange = (newClass: 'A' | 'A++') => {
    setEnergyClass(newClass);
    if (newClass === 'A++') {
      setGlazing('triple');
    }
  };

  // Synchronize Color Coverage when swatch changes
  const handleColorSwatchSelect = (swatch: typeof COLOR_OPTIONS[0]) => {
    setColorOption(swatch);
    if (swatch.id === 'balta') {
      setColorCoverage('white');
    } else if (colorCoverage === 'white') {
      setColorCoverage('exterior');
    }
  };

  // Ensure dimension clamping within valid engineering limits
  const clampedWidth = Math.max(currentTemplate.minWidth, Math.min(currentTemplate.maxWidth, width));
  const clampedHeight = Math.max(currentTemplate.minHeight, Math.min(currentTemplate.maxHeight, height));

  // Reverse-engineered authentic pricing formula
  const currentItemPrice = useMemo(() => {
    const areaM2 = (clampedWidth * clampedHeight) / 1000000;
    const perimeterM = 2 * (clampedWidth + clampedHeight) / 1000;

    let baseUnit = 48;
    let m2Rate = 44;

    currentTemplate.structure.panes.forEach(pane => {
      if (pane.hardware === 'tilt_turn') {
        baseUnit += 46;
      } else if (pane.hardware === 'tilt') {
        baseUnit += 34;
      } else if (pane.hardware === 'turn_active') {
        baseUnit += 110;
      } else if (pane.hardware === 'turn_passive') {
        baseUnit += 75;
      } else {
        baseUnit += 18; // fixed pane
      }

      if (pane.isBalcony) baseUnit += 52;
      if (pane.mullionMid) baseUnit += 18;
      if (pane.lowerThermoPanel) baseUnit += 28;
    });

    if (currentTemplate.category === 'durys') {
      baseUnit += 135; // Heavy-duty 3-point lock, reinforced hinges, insulated low-threshold
    }

    // Energy Class factor (A++ VEKA 82 MD 7 chambers vs A 5 chambers)
    const classFactor = energyClass === 'A++' ? 1.20 : 1.0;

    // Glazing (Ug 0.5 triple vs Ug 1.1 double)
    const glassRate = glazing === 'triple' ? 32 : 12;

    // Color factor
    let colorMultiplier = 1.0;
    if (colorCoverage === 'exterior') colorMultiplier = 1.15;
    if (colorCoverage === 'both') colorMultiplier = 1.25;

    const rawSubtotal = ((baseUnit + (areaM2 * m2Rate) + (areaM2 * glassRate) + (perimeterM * 5)) * classFactor) * colorMultiplier;

    return Math.max(65, Math.round(rawSubtotal));
  }, [currentTemplate, clampedWidth, clampedHeight, energyClass, glazing, colorCoverage]);

  const currentItemSubtotal = currentItemPrice * quantity;

  // Draw Architectural CAD Visualizer on Canvas
  const drawCAD = useCallback((
    targetCanvas: HTMLCanvasElement, 
    template: ProductTemplate, 
    wMm: number, 
    hMm: number, 
    dir: 'template' | 'left' | 'right',
    isMini: boolean = false,
    previewHex?: string
  ) => {
    const ctx = targetCanvas.getContext('2d');
    if (!ctx) return;

    // High DPI scaling
    const dpr = window.devicePixelRatio || 1;
    const rect = targetCanvas.getBoundingClientRect();
    
    // For mini preview canvas, use clientWidth/clientHeight or fall back
    const targetW = rect.width || targetCanvas.width || (isMini ? 96 : 480);
    const targetH = rect.height || targetCanvas.height || (isMini ? 96 : 380);

    targetCanvas.width = targetW * dpr;
    targetCanvas.height = targetH * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, targetW, targetH);

    const padding = isMini ? 8 : 44;
    const frameOuterThickness = isMini ? 3 : 7;
    const sashThickness = isMini ? 3 : 6;
    const mullionThickness = isMini ? 2 : 5;

    const availableW = targetW - padding * 2;
    const availableH = targetH - padding * 2;
    const ar = wMm / hMm;

    let w: number;
    let h: number;
    if (availableW / availableH > ar) {
      h = availableH;
      w = availableH * ar;
    } else {
      w = availableW;
      h = availableW / ar;
    }

    const x = (targetW - w) / 2;
    const y = (targetH - h) / 2;

    // Palette
    const frameStrokeColor = previewHex ? (previewHex === '#FFFFFF' ? '#cbd5e1' : previewHex) : (colorOption.id === 'balta' ? '#cbd5e1' : colorOption.hex);
    const frameFillColor = previewHex === '#FFFFFF' ? '#f8fafc' : '#f1f5f9';

    // 1. Outer Frame Box
    ctx.save();
    ctx.fillStyle = frameFillColor;
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = frameStrokeColor;
    ctx.lineWidth = frameOuterThickness;
    ctx.strokeRect(x, y, w, h);

    // Inner bevel shadow
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x + frameOuterThickness, y + frameOuterThickness, w - frameOuterThickness * 2, h - frameOuterThickness * 2);
    ctx.restore();

    // 2. Division & Panes
    const division = template.structure.division;
    const panes = template.structure.panes.map(p => {
      if (dir !== 'template' && (p.hardware === 'tilt_turn' || p.hardware === 'turn_active' || p.hardware === 'turn_passive')) {
        return { ...p, openingDirection: dir };
      }
      return p;
    });

    const numPanes = panes.length;
    const paneWidth = w / numPanes;

    panes.forEach((pane, idx) => {
      const paneX = x + paneWidth * idx;
      let curW = paneWidth;
      let curX = paneX;

      if (numPanes > 1) {
        if (idx > 0) {
          curW -= mullionThickness / 2;
          curX += mullionThickness / 2;
        }
        if (idx < numPanes - 1) {
          curW -= mullionThickness / 2;
        }
      }

      // Draw vertical mullion divider if between panes
      if (idx > 0) {
        ctx.fillStyle = frameStrokeColor;
        ctx.fillRect(paneX - mullionThickness / 2, y, mullionThickness, h);
      }

      // Draw Pane Interior
      const sashPad = frameOuterThickness + (pane.hardware !== 'fixed' ? sashThickness : 2);
      const ix = curX + sashPad;
      const iy = y + sashPad;
      const iw = curW - sashPad * 2;
      const ih = h - sashPad * 2;

      // Pane Sash Border (if opening)
      if (pane.hardware !== 'fixed') {
        ctx.strokeStyle = frameStrokeColor;
        ctx.lineWidth = sashThickness;
        ctx.strokeRect(ix, iy, iw, ih);
      }

      // Glass Area Fill (Architectural subtle sky-blue gradient)
      const glassGrad = ctx.createLinearGradient(ix, iy, ix + iw, iy + ih);
      glassGrad.addColorStop(0, 'rgba(215, 235, 255, 0.45)');
      glassGrad.addColorStop(0.5, 'rgba(235, 245, 255, 0.25)');
      glassGrad.addColorStop(1, 'rgba(205, 230, 255, 0.5)');

      ctx.fillStyle = glassGrad;
      ctx.fillRect(ix, iy, iw, ih);

      // Glass Sheen Reflection
      if (!isMini) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ix, iy);
        ctx.lineTo(ix + iw * 0.45, iy);
        ctx.lineTo(ix, iy + ih * 0.7);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.fill();
        ctx.restore();
      }

      // Lower Thermo Panel (for balcony door with insulated lower section)
      if (pane.lowerThermoPanel) {
        const panelHeight = ih * 0.38;
        const panelY = iy + ih - panelHeight;

        ctx.save();
        ctx.fillStyle = colorOption.id === 'balta' ? '#e2e8f0' : colorOption.hex;
        ctx.fillRect(ix, panelY, iw, panelHeight);

        // Architectural horizontal grooves
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.lineWidth = 1;
        ctx.strokeRect(ix, panelY, iw, panelHeight);

        if (!isMini) {
          ctx.beginPath();
          ctx.moveTo(ix, panelY + panelHeight * 0.33);
          ctx.lineTo(ix + iw, panelY + panelHeight * 0.33);
          ctx.moveTo(ix, panelY + panelHeight * 0.66);
          ctx.lineTo(ix + iw, panelY + panelHeight * 0.66);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Mid Horizontal Mullion (for balcony door with middle transom)
      if (pane.mullionMid) {
        const midY = iy + ih * 0.5;
        ctx.fillStyle = frameStrokeColor;
        ctx.fillRect(ix, midY - mullionThickness, iw, mullionThickness * 2);
      }

      // Dashed Opening Swing & Tilt Lines
      if (pane.hardware !== 'fixed') {
        ctx.save();
        ctx.strokeStyle = '#c81e1e'; // Red precision accent
        ctx.lineWidth = isMini ? 1.2 : 1.6;
        ctx.setLineDash(isMini ? [3, 2] : [5, 3]);

        // Tilt (Vėdinimo trikampis viršuje)
        if (pane.hardware === 'tilt' || pane.hardware === 'tilt_turn') {
          ctx.beginPath();
          ctx.moveTo(ix, iy + ih);
          ctx.lineTo(ix + iw / 2, iy);
          ctx.lineTo(ix + iw, iy + ih);
          ctx.stroke();
        }

        // Side Turn (Varstymo smaigalys link rankenos)
        if (pane.hardware === 'tilt_turn' || pane.hardware === 'turn_active' || pane.hardware === 'turn_passive') {
          ctx.beginPath();
          if (pane.openingDirection === 'right') {
            // Hinges right, handle left -> point points to the left handle side
            ctx.moveTo(ix + iw, iy);
            ctx.lineTo(ix, iy + ih / 2);
            ctx.lineTo(ix + iw, iy + ih);
          } else {
            // Hinges left, handle right -> point points to the right handle side
            ctx.moveTo(ix, iy);
            ctx.lineTo(ix + iw, iy + ih / 2);
            ctx.lineTo(ix, iy + ih);
          }
          ctx.stroke();
        }
        ctx.restore();

        // Architectural Handle Rendering
        if (!isMini && (pane.hardware === 'tilt_turn' || pane.hardware === 'turn_active')) {
          const handleX = pane.openingDirection === 'right' ? ix + 7 : ix + iw - 7;
          const handleY = iy + ih / 2;

          ctx.save();
          // Rosette
          ctx.fillStyle = '#111215';
          ctx.fillRect(handleX - 2.5, handleY - 7, 5, 14);
          // Lever
          ctx.fillStyle = '#475569';
          ctx.fillRect(handleX - 1.5, handleY, 3, 16);
          ctx.restore();
        }
      }
    });

    // 3. Dimension Cotation Rulers & Labels (Only in main view)
    if (!isMini) {
      ctx.save();
      ctx.strokeStyle = '#94a3b8';
      ctx.fillStyle = '#111215';
      ctx.lineWidth = 1;

      // Top Width Ruler
      const rulerY = y - 16;
      ctx.beginPath();
      // Tick left
      ctx.moveTo(x, rulerY - 5); ctx.lineTo(x, rulerY + 5);
      // Main horizontal line
      ctx.moveTo(x, rulerY); ctx.lineTo(x + w, rulerY);
      // Tick right
      ctx.moveTo(x + w, rulerY - 5); ctx.lineTo(x + w, rulerY + 5);
      ctx.stroke();

      // Top Dimension Tag
      ctx.font = '600 12px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      
      const widthText = `${wMm} mm`;
      const wTextWidth = ctx.measureText(widthText).width;
      ctx.fillStyle = '#fafaf9';
      ctx.fillRect(x + w / 2 - wTextWidth / 2 - 4, rulerY - 14, wTextWidth + 8, 14);
      ctx.fillStyle = '#111215';
      ctx.fillText(widthText, x + w / 2, rulerY - 2);

      // Left Height Ruler
      const rulerX = x - 16;
      ctx.beginPath();
      // Tick top
      ctx.moveTo(rulerX - 5, y); ctx.lineTo(rulerX + 5, y);
      // Main vertical line
      ctx.moveTo(rulerX, y); ctx.lineTo(rulerX, y + h);
      // Tick bottom
      ctx.moveTo(rulerX - 5, y + h); ctx.lineTo(rulerX + 5, y + h);
      ctx.stroke();

      // Left Height Tag (Rotated)
      ctx.save();
      ctx.translate(rulerX - 6, y + h / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.font = '600 12px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      const heightText = `${hMm} mm`;
      const hTextWidth = ctx.measureText(heightText).width;
      ctx.fillStyle = '#fafaf9';
      ctx.fillRect(-hTextWidth / 2 - 4, -14, hTextWidth + 8, 14);
      ctx.fillStyle = '#111215';
      ctx.fillText(heightText, 0, -2);
      ctx.restore();

      ctx.restore();
    }
  }, [colorOption]);

  // Redraw Main Visualizer when inputs change
  useEffect(() => {
    if (mainCanvasRef.current) {
      drawCAD(mainCanvasRef.current, currentTemplate, clampedWidth, clampedHeight, openingDirection, false);
    }
  }, [drawCAD, currentTemplate, clampedWidth, clampedHeight, openingDirection, colorOption]);

  // Add Item to Basket
  const handleAddToBasket = () => {
    const newItem: BasketItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      templateId: currentTemplate.id,
      templateName: currentTemplate.name,
      width: clampedWidth,
      height: clampedHeight,
      energyClass,
      glazing,
      openingDirection,
      colorType: colorCoverage,
      colorLabel: `${colorOption.label} (${colorCoverage === 'white' ? 'Balta' : colorCoverage === 'exterior' ? 'Spalva išorėje' : 'Spalva iš abiejų pusių'})`,
      colorHex: colorOption.hex,
      quantity,
      unitPrice: currentItemPrice,
      totalPrice: currentItemSubtotal
    };

    setBasket(prev => [...prev, newItem]);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);

    try {
      confetti({
        particleCount: 45,
        spread: 50,
        origin: { y: 0.75 },
        colors: ['#111215', '#c81e1e', '#cbd5e1']
      });
    } catch {
      // fallback
    }
  };

  // Remove Item from Basket
  const handleRemoveItem = (id: string) => {
    setBasket(prev => prev.filter(item => item.id !== id));
  };

  // Adjust Quantity in Basket
  const handleUpdateItemQty = (id: string, delta: number) => {
    setBasket(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return {
          ...item,
          quantity: newQty,
          totalPrice: item.unitPrice * newQty
        };
      }
      return item;
    }));
  };

  // Clear All Basket
  const handleClearBasket = () => {
    setBasket([]);
  };

  // Overall Basket Totals
  const basketTotalSum = useMemo(() => {
    return basket.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [basket]);

  const basketTotalUnits = useMemo(() => {
    return basket.reduce((acc, item) => acc + item.quantity, 0);
  }, [basket]);

  // Transfer configured basket to Quote Modal
  const handleCheckoutToQuote = () => {
    let noteText = '';

    if (basket.length > 0) {
      noteText = `Užsakymo sąmata iš skaičiuoklės (${basket.length} pozicijos, iš viso ${basketTotalUnits} vnt.):\n\n`;
      basket.forEach((item, index) => {
        noteText += `${index + 1}. ${item.templateName} (${item.width}x${item.height} mm)\n`;
        noteText += `   - Klasė: ${item.energyClass} | Stiklas: ${item.glazing === 'triple' ? '3 stiklų Ug 0.5' : '2 stiklų Ug 1.1'}\n`;
        noteText += `   - Kryptis: ${item.openingDirection} | Spalva: ${item.colorLabel}\n`;
        noteText += `   - Kiekis: ${item.quantity} vnt. x ${item.unitPrice} € = ${item.totalPrice} €\n\n`;
      });
      noteText += `BENDRA ORIENTACINĖ SUMA: ${basketTotalSum} € (su PVM ir tiesiogine gamyklos nuolaida).\nPageidauju nemokamo meistro atvykimo tiksliam matavimui.`;
    } else {
      // If basket is empty, pass current item
      noteText = `Skaičiuoklės gaminys: ${currentTemplate.name}, Matmenys: ${clampedWidth}x${clampedHeight} mm, Klasė: ${energyClass}, Stiklinimas: ${glazing === 'triple' ? '3 stiklai' : '2 stiklai'}, Spalva: ${colorOption.label}, Kiekis: ${quantity} vnt., Preliminari kaina: ${currentItemSubtotal} € su PVM.`;
    }

    onOpenQuoteModal(noteText);
  };

  // Copy Basket Summary to Clipboard
  const handleCopySummary = () => {
    if (basket.length === 0) return;

    let copyText = `UAB „Termo langai“ – Gaminių sąmata:\n`;
    basket.forEach((item, index) => {
      copyText += `${index + 1}) ${item.templateName} [${item.width}x${item.height} mm] - ${item.quantity} vnt. x ${item.unitPrice} € = ${item.totalPrice} € (${item.energyClass}, ${item.colorLabel})\n`;
    });
    copyText += `Bendra suma: ${basketTotalSum} € su PVM.\n`;

    navigator.clipboard.writeText(copyText).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    });
  };

  // Category filter tabs
  const filteredTemplates = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCT_TEMPLATES;
    return PRODUCT_TEMPLATES.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="skaiciuokle" className="py-20 sm:py-28 bg-[#fafaf9] border-t border-[#e7e8eb]">
      <div className="site-container">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>OFICIALI GAMYKLOS SKAIČIUOKLĖ • 14 ARCHITEKTŪRINIŲ ŠABLONŲ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111215]">
            Langų ir durų kainos skaičiuoklė
          </h2>
          <p className="text-sm sm:text-base text-[#64676f] leading-relaxed">
            Pasirinkite tikslų gaminio šabloną, įveskite angos matmenis ir stebėkite konstrukcijos CAD vizualizaciją realiu laiku. Sukonfigūruotus gaminius įdėkite į sąmatos krepšelį.
          </p>
        </div>

        {/* Configurator Top Layout: 14 Templates Grid + Controls (7 cols) & CAD Visualizer (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT COLUMN: Template Selector & Parameters Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">

            {/* 1. Template Selection Module */}
            <div className="bg-white border border-[#e7e8eb] rounded-lg p-5 sm:p-7 shadow-subtle space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#f0f1f3]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#c81e1e] font-semibold">01</span>
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-[#111215]">
                    Pasirinkite gaminio šabloną
                  </h3>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-1">
                  {[
                    { id: 'all', label: 'Visi (14)' },
                    { id: '1_dalis', label: '1 dalies' },
                    { id: '2_dalys', label: '2 dalių' },
                    { id: '3_dalys', label: '3 dalių' },
                    { id: 'balkonas', label: 'Balkonui' },
                    { id: 'durys', label: 'Lauko durys' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-[#111215] text-white font-medium'
                          : 'bg-[#f4f5f7] text-[#64676f] hover:bg-[#eaecee]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 14 Templates Thumbnails Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredTemplates.map(template => {
                  const isSelected = selectedTemplateId === template.id;
                  return (
                    <button
                      key={template.id}
                      type="button"
                      onClick={() => handleTemplateSelect(template)}
                      className={`p-2 rounded border text-left transition-all flex flex-col items-center justify-between group ${
                        isSelected
                          ? 'border-[#111215] bg-[#fafaf9] shadow-sm ring-1 ring-[#111215]'
                          : 'border-[#e7e8eb] bg-white hover:border-[#cbd0d8] hover:bg-[#fafaf9]'
                      }`}
                    >
                      {/* Mini Preview Canvas */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center pointer-events-none">
                        <MiniTemplateCanvas template={template} isSelected={isSelected} />
                      </div>

                      <div className="mt-2 text-center w-full">
                        <span className={`block text-[11px] font-medium leading-tight line-clamp-2 ${
                          isSelected ? 'text-[#111215] font-semibold' : 'text-[#4b5563]'
                        }`}>
                          {template.name}
                        </span>
                        <span className="text-[9px] font-mono text-[#9ca3af] block mt-0.5">
                          {template.categoryLabel}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Dimensions & Engineering Parameters */}
            <div className="bg-white border border-[#e7e8eb] rounded-lg p-5 sm:p-7 shadow-subtle space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-[#f0f1f3]">
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#c81e1e] font-semibold">02</span>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#111215]">
                  Matmenys ir varstymo parametrai
                </h3>
              </div>

              {/* Dimensions: Width and Height */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Width Slider & Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="input-width" className="font-medium text-[#4b5563]">
                      Plotis (mm)
                    </label>
                    <span className="text-[10px] font-mono text-[#8e9199]">
                      nuo {currentTemplate.minWidth} iki {currentTemplate.maxWidth} mm
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="input-width"
                      type="number"
                      min={currentTemplate.minWidth}
                      max={currentTemplate.maxWidth}
                      step={10}
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-28 p-2 text-xs font-mono font-medium border border-[#d1d5db] rounded focus:ring-1 focus:ring-[#111215] focus:border-[#111215]"
                    />
                    <input
                      type="range"
                      min={currentTemplate.minWidth}
                      max={currentTemplate.maxWidth}
                      step={10}
                      value={clampedWidth}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full accent-[#111215] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Height Slider & Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="input-height" className="font-medium text-[#4b5563]">
                      Aukštis (mm)
                    </label>
                    <span className="text-[10px] font-mono text-[#8e9199]">
                      nuo {currentTemplate.minHeight} iki {currentTemplate.maxHeight} mm
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      id="input-height"
                      type="number"
                      min={currentTemplate.minHeight}
                      max={currentTemplate.maxHeight}
                      step={10}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-28 p-2 text-xs font-mono font-medium border border-[#d1d5db] rounded focus:ring-1 focus:ring-[#111215] focus:border-[#111215]"
                    />
                    <input
                      type="range"
                      min={currentTemplate.minHeight}
                      max={currentTemplate.maxHeight}
                      step={10}
                      value={clampedHeight}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full accent-[#111215] cursor-pointer"
                    />
                  </div>
                </div>

              </div>

              {/* Quick Dimension Presets */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-mono uppercase text-[#8e9199] mr-1">Populiarūs:</span>
                {[
                  { label: '600×600', w: 600, h: 600 },
                  { label: '1000×1400', w: 1000, h: 1400 },
                  { label: '1460×1420', w: 1460, h: 1420 },
                  { label: '2100×1420', w: 2100, h: 1420 },
                  { label: '850×2100', w: 850, h: 2100 },
                  { label: '950×2100', w: 950, h: 2100 }
                ].map(preset => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setWidth(preset.w);
                      setHeight(preset.h);
                    }}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f4f5f7] hover:bg-[#e7e8eb] text-[#4b5563] transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Energy Class & Glazing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Energy Class */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-medium text-[#4b5563]">Energijos klasė</label>
                    <span className="text-[10px] font-mono text-[#c81e1e]">STR reikalavimas</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleEnergyClassChange('A++')}
                      className={`p-2.5 rounded border text-left text-xs transition-all ${
                        energyClass === 'A++'
                          ? 'border-[#111215] bg-[#fafaf9] font-semibold text-[#111215]'
                          : 'border-[#e7e8eb] bg-white text-[#64676f] hover:border-[#cbd0d8]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold">A++ Pasyvus</span>
                        <span className="text-[9px] font-mono px-1 bg-green-100 text-green-800 rounded">VEKA 82</span>
                      </div>
                      <span className="text-[10px] text-[#8e9199] block mt-0.5">Uw ≤ 0.74 W/m²K</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEnergyClassChange('A')}
                      className={`p-2.5 rounded border text-left text-xs transition-all ${
                        energyClass === 'A'
                          ? 'border-[#111215] bg-[#fafaf9] font-semibold text-[#111215]'
                          : 'border-[#e7e8eb] bg-white text-[#64676f] hover:border-[#cbd0d8]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold">A Klasė</span>
                        <span className="text-[9px] font-mono px-1 bg-gray-100 text-gray-700 rounded">70 mm</span>
                      </div>
                      <span className="text-[10px] text-[#8e9199] block mt-0.5">Ekonominė serija</span>
                    </button>
                  </div>
                </div>

                {/* Glazing */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#4b5563]">Stiklo paketas</label>
                  <div className="grid grid-cols-1 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setGlazing('triple')}
                      className={`p-2 rounded border text-left text-xs transition-all flex items-center justify-between ${
                        glazing === 'triple'
                          ? 'border-[#111215] bg-[#fafaf9] font-semibold text-[#111215]'
                          : 'border-[#e7e8eb] bg-white text-[#64676f] hover:border-[#cbd0d8]'
                      }`}
                    >
                      <span>Tristiklis paketas (Ug 0.5)</span>
                      <span className="text-[9px] font-mono text-[#8e9199]">48 mm selektyvas</span>
                    </button>

                    <button
                      type="button"
                      disabled={energyClass === 'A++'}
                      onClick={() => setGlazing('double')}
                      className={`p-2 rounded border text-left text-xs transition-all flex items-center justify-between ${
                        energyClass === 'A++'
                          ? 'opacity-40 cursor-not-allowed bg-gray-50 border-[#e7e8eb]'
                          : glazing === 'double'
                          ? 'border-[#111215] bg-[#fafaf9] font-semibold text-[#111215]'
                          : 'border-[#e7e8eb] bg-white text-[#64676f] hover:border-[#cbd0d8]'
                      }`}
                    >
                      <span>Dvistiklis paketas (Ug 1.1)</span>
                      <span className="text-[9px] font-mono text-[#8e9199]">24 mm</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Opening Direction & Color Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Opening Direction */}
                <div className="space-y-2">
                  <label htmlFor="select-opening-direction" className="text-xs font-medium text-[#4b5563]">Varstymo kryptis</label>
                  <select
                    id="select-opening-direction"
                    value={openingDirection}
                    onChange={(e) => setOpeningDirection(e.target.value as any)}
                    className="w-full p-2 text-xs border border-[#d1d5db] rounded bg-white focus:ring-1 focus:ring-[#111215] focus:border-[#111215]"
                  >
                    <option value="template">Pagal šabloną (Standartinė)</option>
                    <option value="left">Kairinis varstymas (vyriai kairėje)</option>
                    <option value="right">Dešininis varstymas (vyriai dešinėje)</option>
                  </select>
                </div>

                {/* Color Coverage */}
                <div className="space-y-2">
                  <label htmlFor="select-color-coverage" className="text-xs font-medium text-[#4b5563]">Spalvinimas</label>
                  <select
                    id="select-color-coverage"
                    value={colorCoverage}
                    onChange={(e) => setColorCoverage(e.target.value as any)}
                    className="w-full p-2 text-xs border border-[#d1d5db] rounded bg-white focus:ring-1 focus:ring-[#111215] focus:border-[#111215]"
                  >
                    <option value="white">Balta (bazinė kaina)</option>
                    <option value="exterior">Spalva išorėje (+15%)</option>
                    <option value="both">Spalva iš abiejų pusių (+25%)</option>
                  </select>
                </div>

              </div>

              {/* Color Swatches */}
              <div className="space-y-2 pt-2 border-t border-[#f0f1f3]">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-[#4b5563]">Dekoro atspalvis:</span>
                  <span className="text-[11px] font-mono text-[#111215]">{colorOption.label}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {COLOR_OPTIONS.map(swatch => {
                    const isSelected = colorOption.id === swatch.id;
                    return (
                      <button
                        key={swatch.id}
                        type="button"
                        onClick={() => handleColorSwatchSelect(swatch)}
                        className={`p-2 rounded border text-left flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'border-[#111215] bg-[#fafaf9] shadow-sm'
                            : 'border-[#e7e8eb] bg-white hover:border-[#cbd0d8]'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <div className="truncate">
                          <div className="text-[10px] font-medium text-[#111215] truncate">{swatch.label.split(' ')[0]}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity and Add to Basket Button */}
              <div className="pt-4 border-t border-[#f0f1f3] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-xs text-[#64676f]">Kiekis:</span>
                  <div className="flex items-center border border-[#d1d5db] rounded overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-2.5 py-1 text-xs hover:bg-[#f4f5f7] text-[#111215]"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-12 text-center text-xs font-mono font-medium border-x border-[#d1d5db] py-1"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-2.5 py-1 text-xs hover:bg-[#f4f5f7] text-[#111215]"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#111215] ml-2">
                    = {currentItemSubtotal} €
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleAddToBasket}
                  className={`btn-primary w-full sm:w-auto text-xs px-6 py-2.5 flex items-center justify-center gap-2 transition-all ${
                    addedAnimation ? 'bg-green-700 hover:bg-green-800' : ''
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-white animate-pulse" />
                      <span>Įdėta į krepšelį!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Įdėti gaminį į sąmatą</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Interactive High-DPI CAD Visualizer & Live Estimate Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">

            {/* CAD Visualizer Panel */}
            <div className="bg-white border border-[#e7e8eb] rounded-lg p-5 shadow-luxury">
              <div className="flex items-center justify-between pb-3 border-b border-[#f0f1f3] mb-4">
                <div className="flex items-center gap-2">
                  <span className="status-dot"></span>
                  <span className="text-xs font-mono tracking-wider uppercase text-[#111215] font-semibold">
                    CAD VIZUALIZACIJA (REALIOS PROPORCIJOS)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8e9199]">
                  {clampedWidth} × {clampedHeight} mm
                </span>
              </div>

              {/* High-DPI Canvas Visualizer Area */}
              <div className="relative w-full h-[320px] sm:h-[360px] bg-[#f8fafc] border border-[#e2e8f0] rounded flex items-center justify-center p-2 overflow-hidden shadow-inner">
                {/* Background Architectural Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                <canvas
                  ref={mainCanvasRef}
                  className="w-full h-full relative z-10"
                />
              </div>

              {/* Template Specs Bar */}
              <div className="mt-4 pt-3 border-t border-[#f0f1f3] flex items-center justify-between text-xs text-[#64676f]">
                <div>
                  <span className="text-[#111215] font-medium">{currentTemplate.name}</span>
                  <div className="text-[11px] text-[#8e9199] mt-0.5">
                    {energyClass} klasė • {glazing === 'triple' ? '3 stiklai' : '2 stiklai'} • {colorOption.label.split(' ')[0]}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-[#8e9199] block">Vnt. kaina:</span>
                  <span className="font-display text-2xl font-light text-[#111215]">
                    {currentItemPrice} €
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Summary / CTA Callout */}
            <div className="bg-[#111215] text-white rounded-lg p-6 shadow-luxury space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#9ca3af] block">
                    BENDRA SĄMATA KREPŠELYJE
                  </span>
                  <div className="text-3xl sm:text-4xl font-light font-display mt-1 text-white">
                    {basket.length > 0 ? basketTotalSum : currentItemSubtotal} €
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 bg-white/10 rounded text-gray-300">
                  {basket.length > 0 ? `${basketTotalUnits} vnt. krepšelyje` : `${quantity} vnt.`}
                </span>
              </div>

              <p className="text-[11px] text-gray-400 leading-relaxed">
                Tiesioginė gamintojo kaina su PVM. Matuotojo atvykimas, tikslus angų įvertinimas ir konsultacija Kaune, Vilniuje bei Klaipėdoje – nemokamai.
              </p>

              <button
                type="button"
                onClick={handleCheckoutToQuote}
                className="w-full py-3.5 px-4 bg-white text-[#111215] hover:bg-gray-100 rounded text-xs font-semibold tracking-wide uppercase flex items-center justify-center gap-2 transition-all shadow group"
              >
                <span>Užsakyti nemokamą matavimą su šiais gaminiais</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: Configured Items Table / Basket ("Produktai") */}
        <div id="produktai-krepselis" className="mt-16 bg-white border border-[#e7e8eb] rounded-lg p-6 sm:p-8 shadow-subtle space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#f0f1f3]">
            <div>
              <div className="flex items-center gap-2">
                <span className="status-dot"></span>
                <h3 className="text-base font-semibold tracking-wide uppercase text-[#111215]">
                  Sukonfigūruoti gaminiai (Sąmata)
                </h3>
              </div>
              <p className="text-xs text-[#64676f] mt-1">
                Į krepšelį galite sudėti visus savo būsto langus bei duris ir gauti vieningą gamyklos pasiūlymą.
              </p>
            </div>

            {basket.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-3 py-1.5 text-xs border border-[#e7e8eb] rounded hover:bg-[#fafaf9] text-[#64676f] flex items-center gap-1.5 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedNotification ? 'Nukopijuota!' : 'Kopijuoti tekstą'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClearBasket}
                  className="px-3 py-1.5 text-xs border border-[#e7e8eb] rounded hover:bg-red-50 hover:text-red-700 text-[#64676f] transition-colors"
                >
                  Išvalyti visus
                </button>
              </div>
            )}
          </div>

          {basket.length === 0 ? (
            /* Empty state */
            <div className="py-12 text-center space-y-3 bg-[#fafaf9] border border-dashed border-[#e7e8eb] rounded-lg">
              <Layers className="w-8 h-8 text-[#9ca3af] mx-auto stroke-[1.5]" />
              <p className="text-sm font-medium text-[#111215]">Sąmatos krepšelis tuščias</p>
              <p className="text-xs text-[#64676f] max-w-md mx-auto">
                Pasirinkite lango arba durų modelį aukščiau esančiame lange, sukonfigūruokite reikiamus matmenis ir paspauskite mygtuką <strong>„Įdėti gaminį į sąmatą“</strong>.
              </p>
            </div>
          ) : (
            /* Itemized Table */
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs text-[#4b5563]">
                <thead>
                  <tr className="bg-[#f8fafc] text-[#111215] font-semibold border-b border-[#e2e8f0]">
                    <th className="py-3 px-3 w-10">Nr.</th>
                    <th className="py-3 px-3">Gaminys</th>
                    <th className="py-3 px-3">Matmenys</th>
                    <th className="py-3 px-3">Klasė</th>
                    <th className="py-3 px-3">Stiklinimas</th>
                    <th className="py-3 px-3">Varstymas</th>
                    <th className="py-3 px-3">Spalva</th>
                    <th className="py-3 px-3 text-center">Kiekis</th>
                    <th className="py-3 px-3 text-right">Vnt. kaina</th>
                    <th className="py-3 px-3 text-right">Suma</th>
                    <th className="py-3 px-3 text-center">Veiksmas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f1f3]">
                  {basket.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-[#fafaf9] transition-colors">
                      <td className="py-3.5 px-3 font-mono text-[#8e9199]">{idx + 1}</td>
                      <td className="py-3.5 px-3 font-medium text-[#111215]">{item.templateName}</td>
                      <td className="py-3.5 px-3 font-mono text-[#111215] whitespace-nowrap">{item.width} × {item.height} mm</td>
                      <td className="py-3.5 px-3">
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          item.energyClass === 'A++' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.energyClass}
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        {item.glazing === 'triple' ? '3 stiklai (Ug 0.5)' : '2 stiklai (Ug 1.1)'}
                      </td>
                      <td className="py-3.5 px-3">
                        {item.openingDirection === 'template' ? 'Pagal šabloną' : item.openingDirection === 'left' ? 'Kairinis' : 'Dešininis'}
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: item.colorHex }} />
                          <span className="truncate max-w-[120px]">{item.colorLabel.split('(')[0]}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <div className="inline-flex items-center border border-[#e2e8f0] rounded bg-white">
                          <button
                            type="button"
                            onClick={() => handleUpdateItemQty(item.id, -1)}
                            className="px-2 py-0.5 hover:bg-[#f1f5f9] text-[#111215]"
                          >
                            -
                          </button>
                          <span className="px-2 font-mono font-medium text-[#111215]">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleUpdateItemQty(item.id, 1)}
                            className="px-2 py-0.5 hover:bg-[#f1f5f9] text-[#111215]"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono text-[#111215]">{item.unitPrice} €</td>
                      <td className="py-3.5 px-3 text-right font-mono font-bold text-[#111215]">{item.totalPrice} €</td>
                      <td className="py-3.5 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(item.id)}
                          title="Trinti gaminį"
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Basket Grand Total Strip */}
              <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-[#64676f]">
                  <span>Iš viso gaminių: <strong className="text-[#111215] font-mono">{basketTotalUnits} vnt.</strong></span>
                  <span>•</span>
                  <span>Pozicijų: <strong className="text-[#111215] font-mono">{basket.length}</strong></span>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-[#8e9199] block">Bendra sąmatos suma:</span>
                    <span className="text-2xl font-bold font-mono text-[#111215]">{basketTotalSum} €</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckoutToQuote}
                    className="btn-primary text-xs px-6 py-2.5 flex items-center gap-2 group"
                  >
                    <span>Fiksuoti kainą & Užsakyti</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

// Auxiliary component for rendering mini-CAD canvas in template selector
const MiniTemplateCanvas: React.FC<{ template: ProductTemplate; isSelected: boolean }> = ({ template, isSelected }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 80;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, size, size);

    const padding = 6;
    const frameT = 2.5;
    const w = size - padding * 2;
    const h = size - padding * 2;
    const x = padding;
    const y = padding;

    // Frame
    ctx.fillStyle = isSelected ? '#f8fafc' : '#ffffff';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = isSelected ? '#111215' : '#64748b';
    ctx.lineWidth = frameT;
    ctx.strokeRect(x, y, w, h);

    const panes = template.structure.panes;
    const numPanes = panes.length;
    const pw = w / numPanes;

    panes.forEach((pane, idx) => {
      const px = x + pw * idx;
      let curW = pw;

      if (numPanes > 1 && idx > 0) {
        // Vertical mullion
        ctx.fillStyle = isSelected ? '#111215' : '#64748b';
        ctx.fillRect(px - 1, y, 2, h);
      }

      const ix = px + frameT;
      const iy = y + frameT;
      const iw = curW - frameT * 2;
      const ih = h - frameT * 2;

      // Glass tint
      ctx.fillStyle = 'rgba(215, 235, 255, 0.4)';
      ctx.fillRect(ix, iy, iw, ih);

      // Lower thermo panel
      if (pane.lowerThermoPanel) {
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(ix, iy + ih * 0.65, iw, ih * 0.35);
      }

      // Opening dashed lines
      if (pane.hardware !== 'fixed') {
        ctx.save();
        ctx.strokeStyle = '#c81e1e';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 1.5]);

        if (pane.hardware === 'tilt' || pane.hardware === 'tilt_turn') {
          ctx.beginPath();
          ctx.moveTo(ix, iy + ih);
          ctx.lineTo(ix + iw / 2, iy);
          ctx.lineTo(ix + iw, iy + ih);
          ctx.stroke();
        }

        if (pane.hardware === 'tilt_turn' || pane.hardware === 'turn_active' || pane.hardware === 'turn_passive') {
          ctx.beginPath();
          if (pane.openingDirection === 'right') {
            ctx.moveTo(ix + iw, iy);
            ctx.lineTo(ix, iy + ih / 2);
            ctx.lineTo(ix + iw, iy + ih);
          } else {
            ctx.moveTo(ix, iy);
            ctx.lineTo(ix + iw, iy + ih / 2);
            ctx.lineTo(ix, iy + ih);
          }
          ctx.stroke();
        }
        ctx.restore();
      }
    });

  }, [template, isSelected]);

  return <canvas ref={canvasRef} className="w-16 h-16 sm:w-20 sm:h-20" />;
};
