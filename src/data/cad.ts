// ---------------------------------------------------------------------------
// SolidWorks CAD portfolio (images in /public/cad, cut out from renders)
// ---------------------------------------------------------------------------
export type CadModel = {
  slug: string
  title: string
  type: 'Assembly' | 'Part'
  source: string
  blurb: string
  description: string
  techniques: string[]
  image: string
  /** Bento tile size on the gallery page. */
  size: 'lg' | 'wide' | 'sm'
}

export const cadModels: CadModel[] = [
  {
    slug: 'ventilated-guard-shell',
    title: 'Ventilated Guard Shell',
    type: 'Part',
    source: 'Coursework — Exercise E4',
    blurb: 'Shelled enclosure with patterned vent cutouts and an internal splined hub.',
    description:
      'A thin-walled protective shell built around a curved profile, hollowed with the shell feature and ventilated through a circular pattern of teardrop cutouts. An internal splined hub is modelled at the centre of the vent ring, and the outer surface carries a two-tone appearance split across the parting geometry.',
    techniques: ['Shell', 'Circular pattern', 'Extruded cut', 'Lofted boss', 'Appearances'],
    image: '/cad/ventilated-guard-shell.webp',
    size: 'lg',
  },
  {
    slug: 'model-mania-2010',
    title: 'Model Mania 2010',
    type: 'Part',
    source: 'SolidWorks Model Mania challenge',
    blurb: 'The classic timed modelling challenge — organic clamp body with ribs and heavy filleting.',
    description:
      "SolidWorks' Model Mania is a timed contest where a drawing must be turned into a correct solid as fast as possible. This 2010 challenge body combines a forked clamp head, a ribbed core, and continuous wrap-around fillets — an exercise in choosing a feature order that survives the follow-up design-change round.",
    techniques: ['Extruded boss', 'Rib', 'Variable fillet', 'Mirror', 'Design intent'],
    image: '/cad/model-mania-2010.webp',
    size: 'lg',
  },
  {
    slug: 'overhead-trolley-hook',
    title: 'Overhead Trolley & Hook',
    type: 'Assembly',
    source: 'Practice level 9.2',
    blurb: 'Rail-riding trolley cart with wheels and a swinging lifting hook.',
    description:
      'A four-component lifting assembly: a formed track rail, a wheeled trolley cart that rides its flanges, and a load hook hung from the cart body. Mates constrain the wheels to the rail so the cart translates along the track while the hook stays free to swing — mimicking the motion of an overhead conveyor.',
    techniques: ['Assembly mates', 'Concentric mate', 'Width mate', 'Motion check'],
    image: '/cad/overhead-trolley-hook.webp',
    size: 'wide',
  },
  {
    slug: 'locking-pliers',
    title: 'Locking Pliers',
    type: 'Assembly',
    source: 'Practice level 9.1',
    blurb: 'Curved-handle pliers assembled around a single pivot joint.',
    description:
      'A pliers mechanism assembled from swept curved handles and a centre pivot joint. The two handle bodies are mated concentrically about the joint pin so the tool opens and closes realistically, with coincident mates keeping the jaws aligned through the motion range.',
    techniques: ['Sweep', 'Assembly mates', 'Pivot motion', 'Limit mates'],
    image: '/cad/locking-pliers.webp',
    size: 'wide',
  },
  {
    slug: 'universal-joint-handle',
    title: 'Universal-Joint Hand Tool',
    type: 'Assembly',
    source: 'Coursework — Exercise E5',
    blurb: 'Knurled driver handle transmitting torque through a pinned universal joint.',
    description:
      'A hand-driver assembly built from male and female yokes, a spider hinge, colour-coded pins, and a knurled grip. The yokes are pinned to the spider at right angles, forming a working universal joint that transmits rotation through an angle — each pin located with concentric and symmetric mates.',
    techniques: ['Assembly mates', 'Universal joint', 'Knurl appearance', 'Exploded view'],
    image: '/cad/universal-joint-handle.webp',
    size: 'wide',
  },
  {
    slug: 'wire-form-fan-guard',
    title: 'Wire-Form Fan Guard',
    type: 'Part',
    source: 'Coursework — Exercise E7',
    blurb: 'Spiral wire grille swept along 3D sketch geometry.',
    description:
      'A fan guard modelled the way the real part is made — as bent wire. Concentric rings and radial struts are laid out in 3D sketches, then a single circular profile is swept along the paths. The result is a light, accurate wire-form that reads correctly from every angle.',
    techniques: ['3D sketch', 'Sweep', 'Circular pattern', 'Composite curve'],
    image: '/cad/wire-form-fan-guard.webp',
    size: 'sm',
  },
  {
    slug: 'rocker-arm-link',
    title: 'Rocker Arm Link',
    type: 'Part',
    source: 'Coursework exercise',
    blurb: 'Cast-style link with a large eye, tapered web, and pivot boss.',
    description:
      'A classic cast-link shape: a large ring eye blended into a tapered web that ends in a cylindrical pivot boss. Drafted faces and generous fillets give it the look of a casting, while the through-bores stay accurately toleranced machining surfaces.',
    techniques: ['Extruded boss', 'Draft', 'Fillet', 'Hole wizard'],
    image: '/cad/rocker-arm-link.webp',
    size: 'sm',
  },
  {
    slug: 'swept-j-hook',
    title: 'Swept J-Hook',
    type: 'Part',
    source: 'Coursework exercise',
    blurb: 'Constant-section tube swept along a J-shaped path.',
    description:
      'A tubular J-hook produced by sweeping a circular section along a sketched centreline with a controlled bend radius. Simple geometry, but an exercise in clean path sketching — tangent arcs and a flattened tip cut finish the part.',
    techniques: ['Sweep', 'Path sketch', 'Dome/end cut'],
    image: '/cad/swept-j-hook.webp',
    size: 'sm',
  },
  {
    slug: 'snap-fit-cover',
    title: 'Snap-Fit Round Cover',
    type: 'Part',
    source: 'Coursework — Exercise L8',
    blurb: 'Injection-moulding-style circular cover with cantilever snap tabs.',
    description:
      'A round housing cover designed like an injection-moulded part: a revolved base profile, a stepped rim, and cantilever snap-fit tabs spaced around the perimeter with a circular pattern. Draft and constant wall thinking make it a manufacturable plastic part rather than just a shape.',
    techniques: ['Revolve', 'Circular pattern', 'Snap features', 'Draft'],
    image: '/cad/snap-fit-cover.webp',
    size: 'sm',
  },
  {
    slug: 'contoured-journal-block',
    title: 'Contoured Journal Block',
    type: 'Part',
    source: 'Practice level 10.1',
    blurb: 'Rounded-lobe block with cross-bores and blended faces.',
    description:
      'A speed-modelling practice part combining rounded lobes, angled faces, and intersecting cross-bores. The challenge is reading the drawing correctly and picking reference geometry so the blended contours land exactly on the dimensioned tangencies.',
    techniques: ['Extruded boss', 'Fillet', 'Cross-bores', 'Reference planes'],
    image: '/cad/contoured-journal-block.webp',
    size: 'sm',
  },
  {
    slug: 'triple-bore-housing',
    title: 'Triple-Bore Housing',
    type: 'Part',
    source: 'Practice level 10.2',
    blurb: 'Shelled rectangular housing with three coaxial bearing bosses.',
    description:
      'A rectangular gearbox-style housing, shelled to constant wall thickness, with three bored bearing bosses aligned across the cavity. Practises boss-in-shell workflows: the bosses are added after shelling so their bores stay full-round and machinable.',
    techniques: ['Shell', 'Boss pattern', 'Counterbores', 'Linear pattern'],
    image: '/cad/triple-bore-housing.webp',
    size: 'sm',
  },
  {
    slug: 'volute-scroll-guide',
    title: 'Volute Scroll Guide',
    type: 'Part',
    source: 'Practice level 10.3',
    blurb: 'Spiral volute body with a forked outlet — swept scroll geometry.',
    description:
      'A scroll-shaped guide reminiscent of a pump volute: the body wraps in a spiral of increasing radius and ends in a forked outlet. Built with a swept profile along a spiral path plus planar trims, it is a compact exercise in controlling curvature along a path.',
    techniques: ['Sweep', 'Spiral path', 'Trim/extend', 'Fillet'],
    image: '/cad/volute-scroll-guide.webp',
    size: 'sm',
  },
  {
    slug: 'ttt-angle-bracket',
    title: 'TTT Angle Bracket',
    type: 'Part',
    source: 'TooTallToby challenge',
    blurb: 'Timed-challenge bracket with an inclined face and curved slot.',
    description:
      'A TooTallToby speed-modelling bracket: a flat base with twin mounting holes rising into an inclined face carrying a curved slot. TooTallToby challenges are scored on time to the correct mass — this one rewards a minimal feature tree and clean datum choices.',
    techniques: ['Extruded boss', 'Angled reference plane', 'Curved slot', 'Mass-check'],
    image: '/cad/ttt-angle-bracket.webp',
    size: 'sm',
  },
]

export function getCadModel(slug: string): CadModel | undefined {
  return cadModels.find((m) => m.slug === slug)
}
