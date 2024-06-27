import '@astrojs/internal-helpers/path';
import { createClient } from '@sanity/client';
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, F as FailedToFetchRemoteImageDimensions, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_7hprNihR.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';
import { i as isRemoteImage, a as isESMImportedImage, b as isLocalService, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_C-qggm2D.mjs';
/* empty css                        */

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1)
      return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength)
      return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
      return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox)
      return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  // eslint-disable-next-line regexp/prefer-d
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = toUTF8String(input).match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_C-qggm2D.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$6 = createAstro("https://monolid74.com/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro("https://monolid74.com/");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const outDir = new URL("file:///C:/Users/%D0%95%D0%B3%D0%BE%D1%80/Desktop/projects/%D1%81%D0%B0%D0%B9%D1%82/monolid/monolid/jk/dist/");
					new URL("_astro", outDir);
					const getImage = async (options) => await getImage$1(options, imageConfig);

const sanityClient = createClient(
            {"apiVersion":"2023-05-03","projectId":"5d4cymjm","dataset":"production","useCdn":true,"token":"skY7izzp3PcLqi1Szbo0AAUjOiuPtAO9SMDNwobHPgQuQuwkDfMsVfLlYQUN6ADiT4hOcvCve2RW2GMMVoByLVbd4IcrzvLm1YlxEZHXTWvmhYQ4AoT7ayNC8UYl1CDobnXJB1yLsR05EyCOIgUdrRjmQ13xcAxEZfKMN43kVVDON7spSBtv"}
          );

globalThis.sanityClient = sanityClient;

const $$Astro$4 = createAstro("https://monolid74.com/");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  const isVtorichkaUrl = href === "/vtorichka/";
  return renderTemplate`${maybeRenderHead()}<li itemprop="name"${addAttribute(["header__li", [className]], "class:list")} data-astro-cid-eimmu3lg> ${isVtorichkaUrl && renderTemplate`<span class="vtorichka__badge" data-astro-cid-eimmu3lg>В продаже</span>`} <a itemprop="url"${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> </li> `;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/components/HeaderLink.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.H7Hu9AXw.jpg","width":204,"height":55,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/assets/logo.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://monolid74.com/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="tradeInOffer" data-astro-cid-3ef6ksr2> <a href="/#tradeIn" data-astro-cid-3ef6ksr2>Успейте воспользоваться нашим Трейд-ин предложением!</a> <button aria-label="Закрыть меню" class="tradeInOffer-close" data-astro-cid-3ef6ksr2> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-3ef6ksr2></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-astro-cid-3ef6ksr2></path></g></svg> </button> </div> <header class="mainHeader" itemtype="https://schema.org/WPHeader" itemscope data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <div class="header__wrapper" data-astro-cid-3ef6ksr2> <div class="upper-header" data-astro-cid-3ef6ksr2> <div itemscope itemtype="https://schema.org/LocalBusiness" data-astro-cid-3ef6ksr2> <a class="logo" href="/" data-astro-cid-3ef6ksr2> <meta itemprop="telephone" content="+7 (922) 740-58-00"> <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" data-astro-cid-3ef6ksr2> <meta itemprop="streetAddress" content="Университетская Набережная, 97А"> <meta itemprop="postalCode" content="454136"> <meta itemprop="addressLocality" content="Челябинск"> </div> <meta itemprop="openingHours" content="Mo-Fr 10:00-20:00"> <meta itemprop="email" content="monolid2024@yandex.ru"> <link itemprop="url" href="https://monolid74.com/"> ${renderComponent($$result, "Image", $$Image, { "itemprop": "logo", "quality": 100, "src": logo, "alt": "\u041B\u043E\u0433\u043E\u0442\u0438\u043F", "data-astro-cid-3ef6ksr2": true })} <meta itemprop="name" content="Монолид — Компания по продаже недвижимости"> <div itemprop="geo" itemscope="" itemtype="https://schema.org/GeoCoordinates" data-astro-cid-3ef6ksr2> <meta itemprop="latitude" content="55.172136"> <meta itemprop="longitude" content="61.316809"> </div> </a> </div> <div class="header__workingHours" data-astro-cid-3ef6ksr2> <div class="location-wrapper" data-astro-cid-3ef6ksr2> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jog7lwvv="" data-astro-cid-3ef6ksr2> <path d="M7.70538 0C4.67267 0 2.20538 2.59944 2.20538 5.79456C2.20538 9.75981 7.12734 15.581 7.3369 15.8269C7.53373 16.0579 7.87739 16.0575 8.07387 15.8269C8.28342 15.581 13.2054 9.75981 13.2054 5.79456C13.2053 2.59944 10.7381 0 7.70538 0ZM7.70538 8.70997C6.17955 8.70997 4.93822 7.40212 4.93822 5.79456C4.93822 4.187 6.17958 2.87919 7.70538 2.87919C9.23119 2.87919 10.4725 4.18703 10.4725 5.79459C10.4725 7.40216 9.23119 8.70997 7.70538 8.70997Z" fill="#1C244B" data-astro-cid-jog7lwvv="" data-astro-cid-3ef6ksr2></path> </svg> <div data-astro-cid-3ef6ksr2>Университетская Набережная, 97А</div> </div> <div class="hours__wrapper" data-astro-cid-3ef6ksr2> <b data-astro-cid-3ef6ksr2>ПН-ПТ: <span data-astro-cid-3ef6ksr2>10:00 – 20:00</span></b> <b data-astro-cid-3ef6ksr2>СБ-ВС: <span data-astro-cid-3ef6ksr2>Выходной</span></b> </div> </div> <div class="header__call-wrapper" data-astro-cid-3ef6ksr2> <button class="header__callback" data-astro-cid-3ef6ksr2>Заказать звонок</button> <address data-astro-cid-3ef6ksr2> <div class="header__phone-wrapper" data-astro-cid-3ef6ksr2> <a href="tel:+79227405800" data-astro-cid-3ef6ksr2>+ 7 (922) 740-58-00</a> <a href="tel:+79227301700" data-astro-cid-3ef6ksr2>+ 7 (922) 730-17-00</a> </div> </address> </div> <address class="main-nav__address" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a target="_blank" href="https://wa.me/79227405800" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 176 176" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g data-name="Layer 2" data-astro-cid-3ef6ksr2><rect width="176" height="176" fill="#29a71a" rx="24" opacity="1" data-original="#29a71a" class="" data-astro-cid-3ef6ksr2></rect><g fill="#fff" data-astro-cid-3ef6ksr2><path d="M126.8 49.2a54.57 54.57 0 0 0-87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53A54.56 54.56 0 0 0 126.8 49.2zm-8.59 68.56a42.74 42.74 0 0 1-49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 0 1 7.86-49.59 42.73 42.73 0 0 1 60.42 0 2.28 2.28 0 0 0 .22.22 42.72 42.72 0 0 1-.22 60.19z" fill="#ffffff" opacity="1" data-original="#ffffff" class="" data-astro-cid-3ef6ksr2></path><path d="M116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15C63 89.41 59.86 80.08 60.62 72.68c.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 0 1 6.15 1.41l4.45 10a3.91 3.91 0 0 1-.49 4l-2.25 2.92a3.87 3.87 0 0 0-.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 0 0 4.19-.88l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.91z" fill="#ffffff" opacity="1" data-original="#ffffff" class="" data-astro-cid-3ef6ksr2></path></g></g></g></svg> </a> </li> <li data-astro-cid-3ef6ksr2> <a target="_blank" href="https://t.me/MonoliD24" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 176 176" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g data-name="Layer 2" data-astro-cid-3ef6ksr2><rect width="176" height="176" fill="#1c8adb" rx="24" opacity="1" data-original="#1c8adb" data-astro-cid-3ef6ksr2></rect><path fill="#ffffff" d="m135.94 45.5-1.82.66-98.78 35.59a3.31 3.31 0 0 0 .29 6.4l25.57 7 4.77 14 4.77 14a4.54 4.54 0 0 0 7.32 1.63l13.21-12.48 25.94 17.59c3.17 2.16 7.69.56 8.5-3l17.18-75.91c.84-3.76-3.12-6.85-6.95-5.48zm-12.61 16.85L78.7 98.83l-2.1 1.72a2.27 2.27 0 0 0-.84 1.48l-.47 3.88-1.29 10.9a.5.5 0 0 1-1 .08L69.37 106l-3.75-11.15a2.26 2.26 0 0 1 1.08-2.67l46.44-26.62 8.74-5c1.27-.74 2.57.87 1.45 1.79z" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path></g></g></svg> </a> </li> <li data-astro-cid-3ef6ksr2> <a target="_blank" href="viber://chat?number=79227405800" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 176 176" style="enable-background:new 0 0 512 512" xml:space="preserve" class="hovered-paths" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g data-name="Layer 2" data-astro-cid-3ef6ksr2><g data-name="07.viber" data-astro-cid-3ef6ksr2><path fill="#6f3faa" d="M144.52 173a532.59 532.59 0 0 1-113 0A32.07 32.07 0 0 1 3 144.52a532.59 532.59 0 0 1 0-113A32.07 32.07 0 0 1 31.48 3a532.59 532.59 0 0 1 113 0A32.07 32.07 0 0 1 173 31.48a532.59 532.59 0 0 1 0 113A32.07 32.07 0 0 1 144.52 173z" opacity="1" data-original="#6f3faa" class="hovered-path" data-astro-cid-3ef6ksr2></path><g fill="#fff" data-astro-cid-3ef6ksr2><path d="M138.83 61.45v-.13c-1.18-4.78-4.26-9.72-8.3-13.88-4.72-4.88-10.73-8.71-16.47-9.95h-.12a137.68 137.68 0 0 0-51.82 0H62C51.34 39.8 39.77 50.94 37.19 61.32v.13a101.55 101.55 0 0 0 0 43.69v.12c1.84 7.4 8.24 15.18 15.62 19.88a30 30 0 0 0 7.79 3.61v11.58a4.66 4.66 0 0 0 8 3.23l11.74-12.2c2.54.14 5.1.22 7.64.22a138.13 138.13 0 0 0 25.91-2.46h.12c10.63-2.32 22.21-13.46 24.77-23.84v-.12a101.55 101.55 0 0 0 .05-43.71zM129.54 103c-1.72 6.77-10.5 15.2-17.49 16.75A128.49 128.49 0 0 1 84.49 122a.59.59 0 0 0-.48.2l-8.57 8.8-9.12 9.35a1.06 1.06 0 0 1-1.83-.73v-19.2a.66.66 0 0 0-.54-.65 16.94 16.94 0 0 1-4.18-1.6C53.83 115 47.84 108.5 46.46 103a92 92 0 0 1 0-39.49C48.17 56.77 57 48.36 63.94 46.8a128 128 0 0 1 48.11 0c3.85.86 8.25 3.79 11.69 7.39 2.83 2.93 5 6.31 5.8 9.35a92 92 0 0 1 0 39.46z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M112.3 104a14.83 14.83 0 0 1-6.36 7 15.21 15.21 0 0 1-2.75.87c-1.07-.32-2.09-.54-3-.93a75.87 75.87 0 0 1-20.9-12.29 52.64 52.64 0 0 1-5.23-5.13 67.8 67.8 0 0 1-10-15.26c-1.28-2.61-2.36-5.31-3.46-8-1-2.45.48-5 2-6.83a16 16 0 0 1 5.37-4 3.46 3.46 0 0 1 4.31 1A55.86 55.86 0 0 1 79 69.76a4.44 4.44 0 0 1-1.25 6c-.5.35-1 .75-1.43 1.14a4.51 4.51 0 0 0-1.08 1.14 3.13 3.13 0 0 0-.24 2.77c1.93 5.31 4.86 9.74 9.24 12.85A23.88 23.88 0 0 0 89 96.27a7.25 7.25 0 0 0 3.58.88c2.18-.26 2.9-2.67 4.42-3.91a4.19 4.19 0 0 1 5-.23c1.62 1 3.18 2.13 4.74 3.23a52.31 52.31 0 0 1 4.45 3.4 3.52 3.52 0 0 1 1.11 4.36zM89.16 56h-.58zM90.87 56.08h-1.28c.41-.02.84 0 1.28 0z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M113 86.05c-1 0-1.49-.85-1.56-1.78-.13-1.83-.23-3.67-.48-5.49a22.24 22.24 0 0 0-3.14-8.65 23 23 0 0 0-15.4-10.58c-1.44-.26-2.91-.32-4.36-.47-.92-.1-2.13-.16-2.33-1.3A1.57 1.57 0 0 1 87.28 56a6.26 6.26 0 0 1 .72 0 26.58 26.58 0 0 1 22 12 26.29 26.29 0 0 1 3.78 9.69c.38 2.16.52 4.38.69 6.58a1.54 1.54 0 0 1-1.47 1.78z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M107.59 81.38a3.82 3.82 0 0 1-.12.88 1.47 1.47 0 0 1-2.76.15 4.3 4.3 0 0 1-.15-1.24 16.11 16.11 0 0 0-1.3-6.51c-.2-.44-.42-.89-.67-1.32a14.56 14.56 0 0 0-6.11-5.73 18 18 0 0 0-4.86-1.5c-.74-.12-1.48-.19-2.22-.29a1.41 1.41 0 0 1-1.33-1.57 1.39 1.39 0 0 1 1.55-1.38 20.26 20.26 0 0 1 8.43 2.2 17 17 0 0 1 7.45 7.36 19.22 19.22 0 0 1 1.84 5.9 7.93 7.93 0 0 1 .12.81c.05.6.07 1.2.12 1.94 0 .07.01.16.01.3z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M100.74 80a1.3 1.3 0 0 1-1.06 1h-.22a1.51 1.51 0 0 1-1.52-1 2 2 0 0 1-.12-.51 14.27 14.27 0 0 0-.3-2 5.81 5.81 0 0 0-2.14-3.35 5.66 5.66 0 0 0-1.73-.84c-.79-.23-1.62-.17-2.4-.36a1.48 1.48 0 0 1-1.2-1.71 1.55 1.55 0 0 1 1.63-1.24c4.58.33 8 2.53 8.88 7.44a11.77 11.77 0 0 1 .19 1.38 4 4 0 0 1-.01 1.19z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path></g></g></g></g></svg> </a> </li> </ul> </address> <button aria-label="Открыть меню" class="burger" data-astro-cid-3ef6ksr2> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><path d="M53 21H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h42c1.7 0 3 1.3 3 3s-1.3 3-3 3zM53 35H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h42c1.7 0 3 1.3 3 3s-1.3 3-3 3zM53 49H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h42c1.7 0 3 1.3 3 3s-1.3 3-3 3z" data-astro-cid-3ef6ksr2></path></g></svg> </button> </div> <nav itemtype="https://schema.org/SiteNavigationElement" itemscope aria-label="Основное меню" data-astro-cid-3ef6ksr2> <ul class="nav__links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/catalog/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Каталог новостроек` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/vtorichka/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Вторичное жильё` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/nashi-uslugi/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Наши услуги` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/calc/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Ипотечный калькулятор` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/faq/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Ответы на вопросы` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contacts/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Контакты` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Новости` })} </ul> </nav> </div> </div> </header> <nav class="burger-menu" aria-label="Раскрывающееся меню" data-astro-cid-3ef6ksr2> <ul itemscope itemtype="https://schema.org/SiteNavigationElement" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/catalog/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Каталог новостроек` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/vtorichka/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Вторичное жильё` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/nashi-uslugi/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Наши услуги` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/calc/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Ипотечный калькулятор` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/faq/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Ответы на вопросы` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contacts/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Контакты` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Новости` })} </ul> <div class="menu__orgInfo" data-astro-cid-3ef6ksr2> <div class="menu__org-wrapper" data-astro-cid-3ef6ksr2> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jog7lwvv="" data-astro-cid-3ef6ksr2> <path d="M7.70538 0C4.67267 0 2.20538 2.59944 2.20538 5.79456C2.20538 9.75981 7.12734 15.581 7.3369 15.8269C7.53373 16.0579 7.87739 16.0575 8.07387 15.8269C8.28342 15.581 13.2054 9.75981 13.2054 5.79456C13.2053 2.59944 10.7381 0 7.70538 0ZM7.70538 8.70997C6.17955 8.70997 4.93822 7.40212 4.93822 5.79456C4.93822 4.187 6.17958 2.87919 7.70538 2.87919C9.23119 2.87919 10.4725 4.18703 10.4725 5.79459C10.4725 7.40216 9.23119 8.70997 7.70538 8.70997Z" fill="#1C244B" data-astro-cid-jog7lwvv="" data-astro-cid-3ef6ksr2></path> </svg> <div data-astro-cid-3ef6ksr2>Университетская Набережная, 97А</div> </div> <div class="menu__org-hours" data-astro-cid-3ef6ksr2> <b data-astro-cid-3ef6ksr2>ПН-ПТ: <span data-astro-cid-3ef6ksr2>10:00 – 20:00</span></b> <b data-astro-cid-3ef6ksr2>СБ-ВС: <span data-astro-cid-3ef6ksr2>Выходной</span></b> </div> </div> <address class="secondary-nav__address" data-astro-cid-3ef6ksr2> <div class="secondary-nav__wrapper" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a target="_blank" href="https://wa.me/79227405800" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 176 176" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g data-name="Layer 2" data-astro-cid-3ef6ksr2><rect width="176" height="176" fill="#29a71a" rx="24" opacity="1" data-original="#29a71a" class="" data-astro-cid-3ef6ksr2></rect><g fill="#fff" data-astro-cid-3ef6ksr2><path d="M126.8 49.2a54.57 54.57 0 0 0-87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53A54.56 54.56 0 0 0 126.8 49.2zm-8.59 68.56a42.74 42.74 0 0 1-49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 0 1 7.86-49.59 42.73 42.73 0 0 1 60.42 0 2.28 2.28 0 0 0 .22.22 42.72 42.72 0 0 1-.22 60.19z" fill="#ffffff" opacity="1" data-original="#ffffff" class="" data-astro-cid-3ef6ksr2></path><path d="M116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15C63 89.41 59.86 80.08 60.62 72.68c.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 0 1 6.15 1.41l4.45 10a3.91 3.91 0 0 1-.49 4l-2.25 2.92a3.87 3.87 0 0 0-.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 0 0 4.19-.88l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.91z" fill="#ffffff" opacity="1" data-original="#ffffff" class="" data-astro-cid-3ef6ksr2></path></g></g></g></svg> </a> </li> <li data-astro-cid-3ef6ksr2> <a target="_blank" href="https://t.me/MonoliD24" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 176 176" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g data-name="Layer 2" data-astro-cid-3ef6ksr2><rect width="176" height="176" fill="#1c8adb" rx="24" opacity="1" data-original="#1c8adb" data-astro-cid-3ef6ksr2></rect><path fill="#ffffff" d="m135.94 45.5-1.82.66-98.78 35.59a3.31 3.31 0 0 0 .29 6.4l25.57 7 4.77 14 4.77 14a4.54 4.54 0 0 0 7.32 1.63l13.21-12.48 25.94 17.59c3.17 2.16 7.69.56 8.5-3l17.18-75.91c.84-3.76-3.12-6.85-6.95-5.48zm-12.61 16.85L78.7 98.83l-2.1 1.72a2.27 2.27 0 0 0-.84 1.48l-.47 3.88-1.29 10.9a.5.5 0 0 1-1 .08L69.37 106l-3.75-11.15a2.26 2.26 0 0 1 1.08-2.67l46.44-26.62 8.74-5c1.27-.74 2.57.87 1.45 1.79z" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path></g></g></svg> </a> </li> <li data-astro-cid-3ef6ksr2> <a target="_blank" href="viber://chat?number=79227405800" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 176 176" style="enable-background:new 0 0 512 512" xml:space="preserve" class="hovered-paths" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g data-name="Layer 2" data-astro-cid-3ef6ksr2><g data-name="07.viber" data-astro-cid-3ef6ksr2><path fill="#6f3faa" d="M144.52 173a532.59 532.59 0 0 1-113 0A32.07 32.07 0 0 1 3 144.52a532.59 532.59 0 0 1 0-113A32.07 32.07 0 0 1 31.48 3a532.59 532.59 0 0 1 113 0A32.07 32.07 0 0 1 173 31.48a532.59 532.59 0 0 1 0 113A32.07 32.07 0 0 1 144.52 173z" opacity="1" data-original="#6f3faa" class="hovered-path" data-astro-cid-3ef6ksr2></path><g fill="#fff" data-astro-cid-3ef6ksr2><path d="M138.83 61.45v-.13c-1.18-4.78-4.26-9.72-8.3-13.88-4.72-4.88-10.73-8.71-16.47-9.95h-.12a137.68 137.68 0 0 0-51.82 0H62C51.34 39.8 39.77 50.94 37.19 61.32v.13a101.55 101.55 0 0 0 0 43.69v.12c1.84 7.4 8.24 15.18 15.62 19.88a30 30 0 0 0 7.79 3.61v11.58a4.66 4.66 0 0 0 8 3.23l11.74-12.2c2.54.14 5.1.22 7.64.22a138.13 138.13 0 0 0 25.91-2.46h.12c10.63-2.32 22.21-13.46 24.77-23.84v-.12a101.55 101.55 0 0 0 .05-43.71zM129.54 103c-1.72 6.77-10.5 15.2-17.49 16.75A128.49 128.49 0 0 1 84.49 122a.59.59 0 0 0-.48.2l-8.57 8.8-9.12 9.35a1.06 1.06 0 0 1-1.83-.73v-19.2a.66.66 0 0 0-.54-.65 16.94 16.94 0 0 1-4.18-1.6C53.83 115 47.84 108.5 46.46 103a92 92 0 0 1 0-39.49C48.17 56.77 57 48.36 63.94 46.8a128 128 0 0 1 48.11 0c3.85.86 8.25 3.79 11.69 7.39 2.83 2.93 5 6.31 5.8 9.35a92 92 0 0 1 0 39.46z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M112.3 104a14.83 14.83 0 0 1-6.36 7 15.21 15.21 0 0 1-2.75.87c-1.07-.32-2.09-.54-3-.93a75.87 75.87 0 0 1-20.9-12.29 52.64 52.64 0 0 1-5.23-5.13 67.8 67.8 0 0 1-10-15.26c-1.28-2.61-2.36-5.31-3.46-8-1-2.45.48-5 2-6.83a16 16 0 0 1 5.37-4 3.46 3.46 0 0 1 4.31 1A55.86 55.86 0 0 1 79 69.76a4.44 4.44 0 0 1-1.25 6c-.5.35-1 .75-1.43 1.14a4.51 4.51 0 0 0-1.08 1.14 3.13 3.13 0 0 0-.24 2.77c1.93 5.31 4.86 9.74 9.24 12.85A23.88 23.88 0 0 0 89 96.27a7.25 7.25 0 0 0 3.58.88c2.18-.26 2.9-2.67 4.42-3.91a4.19 4.19 0 0 1 5-.23c1.62 1 3.18 2.13 4.74 3.23a52.31 52.31 0 0 1 4.45 3.4 3.52 3.52 0 0 1 1.11 4.36zM89.16 56h-.58zM90.87 56.08h-1.28c.41-.02.84 0 1.28 0z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M113 86.05c-1 0-1.49-.85-1.56-1.78-.13-1.83-.23-3.67-.48-5.49a22.24 22.24 0 0 0-3.14-8.65 23 23 0 0 0-15.4-10.58c-1.44-.26-2.91-.32-4.36-.47-.92-.1-2.13-.16-2.33-1.3A1.57 1.57 0 0 1 87.28 56a6.26 6.26 0 0 1 .72 0 26.58 26.58 0 0 1 22 12 26.29 26.29 0 0 1 3.78 9.69c.38 2.16.52 4.38.69 6.58a1.54 1.54 0 0 1-1.47 1.78z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M107.59 81.38a3.82 3.82 0 0 1-.12.88 1.47 1.47 0 0 1-2.76.15 4.3 4.3 0 0 1-.15-1.24 16.11 16.11 0 0 0-1.3-6.51c-.2-.44-.42-.89-.67-1.32a14.56 14.56 0 0 0-6.11-5.73 18 18 0 0 0-4.86-1.5c-.74-.12-1.48-.19-2.22-.29a1.41 1.41 0 0 1-1.33-1.57 1.39 1.39 0 0 1 1.55-1.38 20.26 20.26 0 0 1 8.43 2.2 17 17 0 0 1 7.45 7.36 19.22 19.22 0 0 1 1.84 5.9 7.93 7.93 0 0 1 .12.81c.05.6.07 1.2.12 1.94 0 .07.01.16.01.3z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path><path d="M100.74 80a1.3 1.3 0 0 1-1.06 1h-.22a1.51 1.51 0 0 1-1.52-1 2 2 0 0 1-.12-.51 14.27 14.27 0 0 0-.3-2 5.81 5.81 0 0 0-2.14-3.35 5.66 5.66 0 0 0-1.73-.84c-.79-.23-1.62-.17-2.4-.36a1.48 1.48 0 0 1-1.2-1.71 1.55 1.55 0 0 1 1.63-1.24c4.58.33 8 2.53 8.88 7.44a11.77 11.77 0 0 1 .19 1.38 4 4 0 0 1-.01 1.19z" fill="#ffffff" opacity="1" data-original="#ffffff" data-astro-cid-3ef6ksr2></path></g></g></g></g></svg> </a> </li> </ul> <button class="header__callback" data-astro-cid-3ef6ksr2>Заказать звонок</button> <div style="display: flex; flex-direction: column; gap: 5px;" data-astro-cid-3ef6ksr2> <a href="tel:+79227405800" data-astro-cid-3ef6ksr2>+ 7 (922) 740-58-00</a> <a href="tel:+79227301700" data-astro-cid-3ef6ksr2>+ 7 (922) 730-17-00</a> </div> </div> </address> <button aria-label="Закрыть меню" class="menu-close" data-astro-cid-3ef6ksr2> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-3ef6ksr2></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-astro-cid-3ef6ksr2></path></g></svg> </button> </nav> <form class="widget__form" data-astro-cid-3ef6ksr2> <button aria-label="Закрыть форму" class="menu-close-form" data-astro-cid-3ef6ksr2> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-3ef6ksr2></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-astro-cid-3ef6ksr2></path></g></svg> </button> <p class="form__title" data-astro-cid-3ef6ksr2>Бесплатная консультация</p> <div class="input-box" data-astro-cid-3ef6ksr2> <label for="hero__name" data-astro-cid-3ef6ksr2><input id="hero__name" placeholder="Введите ваше имя" type="text" required name="name" data-astro-cid-3ef6ksr2></label> <label for="hero__phone" data-astro-cid-3ef6ksr2><input id="hero__phone" class="phoneMask" placeholder="Ваш номер телефона" type="tel" required name="phone" data-astro-cid-3ef6ksr2></label> </div> <button type="submit" class="input-box-btn" data-astro-cid-3ef6ksr2>Записаться</button> <p style="font-size: 12px; margin-top: 10px; text-align: center;" data-astro-cid-3ef6ksr2>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p> <div class="form-sent-message widgetMessage" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="52" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><switch data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g fill="#02bc7d" data-astro-cid-3ef6ksr2><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-3ef6ksr2></path><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-3ef6ksr2></path></g></g></switch></g></svg> <p data-astro-cid-3ef6ksr2>Форма успешно отправлена</p> </div> </form> <div class="widget" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 473.806 473.806" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" fill="#000000" data-astro-cid-3ef6ksr2></path></g></svg> </div> <div class="blurry" data-astro-cid-3ef6ksr2></div> <div class="callback__modal" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2>Заказать звонок</div> <form class="callback__form" data-astro-cid-3ef6ksr2> <label class="visually-hidden" data-astro-cid-3ef6ksr2>Телефон</label> <input class="phoneMask callback__phoneInput" placeholder="Телефон" name="phone" type="tel" required data-astro-cid-3ef6ksr2> <button type="submit" class="callback__btn" data-astro-cid-3ef6ksr2>Жду звонка</button> <p data-astro-cid-3ef6ksr2>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p> </form> <button aria-label="Закрыть форму" class="callback-form__close" data-astro-cid-3ef6ksr2> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-3ef6ksr2></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-astro-cid-3ef6ksr2></path></g></svg> </button> <div class="form-sent-message callbackMessage" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="52" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><switch data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><g fill="#02bc7d" data-astro-cid-3ef6ksr2><path d="M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l7-8c.3-.5.3-1.1-.2-1.4-.4-.3-1-.3-1.3.1L12 13.5z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-3ef6ksr2></path><path d="M21 11c-.6 0-1 .4-1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.1.8-4.1 2.3-5.6C7.8 4.8 9.8 4 12 4c.6 0 1.3.1 1.9.2.5.2 1.1-.1 1.3-.7s-.2-1-.7-1.2h-.1c-.8-.2-1.6-.3-2.4-.3C6.5 2 2 6.5 2 12.1c0 2.6 1.1 5.2 2.9 7 1.9 1.9 4.4 2.9 7 2.9 5.5 0 10-4.5 10-10 .1-.6-.4-1-.9-1z" fill="#02bc7d" opacity="1" data-original="#02bc7d" data-astro-cid-3ef6ksr2></path></g></g></switch></g></svg> <p data-astro-cid-3ef6ksr2>Форма успешно отправлена</p> </div> </div> <header class="sticky__header" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <div class="sticky__wrapper" data-astro-cid-3ef6ksr2> <nav aria-label="Липкое меню" data-astro-cid-3ef6ksr2> <ul class="sticky__header-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/catalog/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Каталог новостроек` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/vtorichka/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Вторичное жильё` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/nashi-uslugi/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Наши услуги` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/calc/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Ипотечный калькулятор` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/faq/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Ответы на вопросы` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contacts/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Контакты` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Новости` })} </ul> </nav> <button class="sticky__header-btn header__callback" data-astro-cid-3ef6ksr2>Заказать звонок</button> <button aria-label="Открыть меню" class="burger sticky-burger" data-astro-cid-3ef6ksr2> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" data-astro-cid-3ef6ksr2><g data-astro-cid-3ef6ksr2><path d="M53 21H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h42c1.7 0 3 1.3 3 3s-1.3 3-3 3zM53 35H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h42c1.7 0 3 1.3 3 3s-1.3 3-3 3zM53 49H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h42c1.7 0 3 1.3 3 3s-1.3 3-3 3z" data-astro-cid-3ef6ksr2></path></g></svg> </button> </div> </div> </header>  `;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro("https://monolid74.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer itemtype="https://schema.org/WPFooter" itemscope data-astro-cid-sz7xmlte> <address data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a target="_blank" href="https://wa.me/79227405800" data-astro-cid-sz7xmlte> <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#29A71A" data-astro-cid-sz7xmlte></path> <path d="M36.0227 13.9771C33.4217 11.3501 29.9675 9.73905 26.2833 9.43454C22.599 9.13003 18.9272 10.1521 15.9301 12.3164C12.9331 14.4807 10.8081 17.6448 9.93848 21.2379C9.06885 24.8309 9.51182 28.6165 11.1875 31.9118L9.54261 39.8975C9.52555 39.977 9.52506 40.0592 9.5412 40.1389C9.55733 40.2185 9.58972 40.294 9.63636 40.3606C9.70469 40.4617 9.80222 40.5395 9.91592 40.5836C10.0296 40.6278 10.1541 40.6362 10.2727 40.6078L18.0994 38.7527C21.3854 40.3859 25.1443 40.8004 28.7072 39.9224C32.27 39.0443 35.4059 36.9308 37.5567 33.9577C39.7075 30.9846 40.7338 27.3449 40.4529 23.6862C40.172 20.0274 38.6022 16.587 36.0227 13.9771ZM33.5824 33.4544C31.7827 35.249 29.4653 36.4336 26.9567 36.8413C24.4481 37.2491 21.8748 36.8594 19.5994 35.7271L18.5085 35.1873L13.7102 36.3237L13.7244 36.264L14.7188 31.4345L14.1847 30.3805C13.022 28.0972 12.6119 25.5045 13.013 22.9738C13.4141 20.4431 14.6059 18.1043 16.4176 16.2924C18.6941 14.0167 21.7811 12.7383 25 12.7383C28.2189 12.7383 31.306 14.0167 33.5824 16.2924C33.6018 16.3147 33.6227 16.3355 33.6449 16.3549C35.8931 18.6365 37.1482 21.7144 37.1365 24.9175C37.1248 28.1207 35.8472 31.1893 33.5824 33.4544Z" fill="white" data-astro-cid-sz7xmlte></path> <path d="M33.1562 29.9116C32.5682 30.8377 31.6392 31.9712 30.4716 32.2525C28.4261 32.7468 25.2869 32.2695 21.3807 28.6275L21.3324 28.5849C17.8977 25.4002 17.0057 22.7496 17.2216 20.6474C17.3409 19.4542 18.3352 18.3746 19.1733 17.6701C19.3058 17.557 19.4629 17.4765 19.6321 17.435C19.8012 17.3935 19.9778 17.3921 20.1476 17.4311C20.3174 17.47 20.4757 17.5481 20.6099 17.6592C20.7441 17.7702 20.8504 17.9111 20.9204 18.0706L22.1846 20.9116C22.2668 21.0958 22.2972 21.2989 22.2727 21.4991C22.2482 21.6992 22.1696 21.889 22.0454 22.0479L21.4062 22.8775C21.2691 23.0488 21.1863 23.2572 21.1686 23.4759C21.1509 23.6946 21.199 23.9136 21.3068 24.1047C21.6647 24.7326 22.5227 25.6559 23.4744 26.511C24.5426 27.4769 25.7272 28.3604 26.4772 28.6616C26.6779 28.7435 26.8986 28.7636 27.1107 28.719C27.3229 28.6744 27.5168 28.5674 27.6676 28.4116L28.4091 27.6644C28.5521 27.5233 28.7301 27.4227 28.9247 27.3728C29.1193 27.3229 29.3237 27.3255 29.517 27.3803L32.5199 28.2326C32.6855 28.2834 32.8373 28.3714 32.9637 28.4899C33.0902 28.6084 33.1878 28.7542 33.2492 28.9162C33.3106 29.0782 33.3342 29.2522 33.318 29.4247C33.3019 29.5972 33.2466 29.7637 33.1562 29.9116Z" fill="white" data-astro-cid-sz7xmlte></path> </svg> </a> </li> <li data-astro-cid-sz7xmlte> <a target="_blank" href="https://t.me/MonoliD24" data-astro-cid-sz7xmlte> <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#039BE5" data-astro-cid-sz7xmlte></path> <path d="M11.4396 24.4583L35.5437 15.1645C36.6625 14.7604 37.6396 15.4374 37.2771 17.1291L37.2792 17.127L33.175 36.4624C32.8708 37.8333 32.0562 38.1666 30.9167 37.5208L24.6667 32.9145L21.6521 35.8187C21.3187 36.152 21.0375 36.4333 20.3917 36.4333L20.8354 30.0729L32.4187 19.6083C32.9229 19.1645 32.3062 18.9145 31.6417 19.3562L17.3271 28.3687L11.1562 26.4437C9.81666 26.0187 9.7875 25.1041 11.4396 24.4583Z" fill="white" data-astro-cid-sz7xmlte></path> </svg> </a> </li> <li data-astro-cid-sz7xmlte> <a target="_blank" href="viber://chat?number=79227405800" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0" y="0" viewBox="0 0 152 152" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" data-astro-cid-sz7xmlte><g data-astro-cid-sz7xmlte><g data-name="Layer 2" data-astro-cid-sz7xmlte><g data-name="12.Viber" data-astro-cid-sz7xmlte><circle cx="76" cy="76" r="76" fill="#665cac" opacity="1" data-original="#665cac" data-astro-cid-sz7xmlte></circle><path fill="#ffffff" d="M84 36H68a28 28 0 0 0-28 28v12a28 28 0 0 0 16 25.31v13.37a1.34 1.34 0 0 0 2.27.94L69.89 104H84a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28zm10.48 52.48-4 4c-4.26 4.17-15.38-.59-25.18-10.6s-14.1-21.24-10-25.41l4-4a4.21 4.21 0 0 1 5.69.06l5.84 6a3.93 3.93 0 0 1-1.6 6.47 3.82 3.82 0 0 0-2.58 4.6c1 4.44 6.64 10 10.84 11.09a4 4 0 0 0 4.67-2.48 3.92 3.92 0 0 1 6.55-1.4l5.83 6a4.2 4.2 0 0 1-.06 5.67zM79.64 55a9.39 9.39 0 0 0-1.19.07 1.33 1.33 0 1 1-.29-2.65 12.23 12.23 0 0 1 1.48-.08A13.35 13.35 0 0 1 93 65.67a12.23 12.23 0 0 1-.08 1.48 1.33 1.33 0 0 1-2.65-.29 11.7 11.7 0 0 0 .07-1.19A10.69 10.69 0 0 0 79.64 55zm8 10.67a1.34 1.34 0 0 1-2.67 0 5.33 5.33 0 0 0-5.33-5.33 1.34 1.34 0 1 1 0-2.67 8 8 0 0 1 8 8zM97.81 70a1.34 1.34 0 1 1-2.6-.62 15.71 15.71 0 0 0 .43-3.69 16 16 0 0 0-16-16H78.4a1.33 1.33 0 0 1-.2-2.66q.72-.06 1.44-.06a18.7 18.7 0 0 1 18.67 18.7 18.94 18.94 0 0 1-.5 4.33z" opacity="1" data-original="#ffffff" class="" data-astro-cid-sz7xmlte></path></g></g></g></svg> </a> </li> </ul> </address> <p data-astro-cid-sz7xmlte>© <span itemprop="copyrightYear" data-astro-cid-sz7xmlte>2024</span> MonoliD</p> <a href="#" class="policy" data-astro-cid-sz7xmlte>Политика конфиденциальности</a> <p class="inn" data-astro-cid-sz7xmlte>© ${today.getFullYear()} Реклама: Агентство недвижимости MonoliD</p> <p style="margin-top: 5px" data-astro-cid-sz7xmlte>ИНН:<span style="color: white !important;" data-astro-cid-sz7xmlte> 741856267450</span></p> <p style="margin-top: 5px" data-astro-cid-sz7xmlte>ОРГНИП: <span style="color: white !important;" data-astro-cid-sz7xmlte>321745600074061</span></p> </footer> <div class="policy__bg" data-astro-cid-sz7xmlte></div> <div class="policy__modal" data-astro-cid-sz7xmlte> <button aria-label="Закрыть форму" class="policy__modal-close" data-astro-cid-sz7xmlte> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background:new 0 0 512 512" xml:space="preserve" data-astro-cid-sz7xmlte><g data-astro-cid-sz7xmlte><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000000" opacity="1" data-original="#000000" data-astro-cid-sz7xmlte></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-astro-cid-sz7xmlte></path></g></svg> </button> <p data-astro-cid-sz7xmlte>Политика в отношении обработки персональных данных</p> <p data-astro-cid-sz7xmlte>1. Общие положения</p> <p data-astro-cid-sz7xmlte>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ИП Левченко Ольга Викторовна (далее – Оператор).</p> <p data-astro-cid-sz7xmlte>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну. </p> <p data-astro-cid-sz7xmlte>1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта  https://monolid74.com. </p> <p data-astro-cid-sz7xmlte>2. Основные понятия, используемые в Политике</p> <p data-astro-cid-sz7xmlte>2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;</p> <p data-astro-cid-sz7xmlte>2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</p> <p data-astro-cid-sz7xmlte>2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://monolid74.com;</p> <p data-astro-cid-sz7xmlte>2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;</p> <p data-astro-cid-sz7xmlte>2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;</p> <p data-astro-cid-sz7xmlte>2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</p> <p data-astro-cid-sz7xmlte>2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</p> <p data-astro-cid-sz7xmlte>2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://monolid74.com;</p> <p data-astro-cid-sz7xmlte>2.9. Пользователь – любой посетитель веб-сайта https://monolid74.com;</p> <p data-astro-cid-sz7xmlte>2.10. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;</p> <p data-astro-cid-sz7xmlte>2.11. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;</p> <p data-astro-cid-sz7xmlte>2.12. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;</p> <p data-astro-cid-sz7xmlte>2.13. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.</p> <p data-astro-cid-sz7xmlte>3. Оператор может обрабатывать следующие персональные данные Пользователя</p> <p data-astro-cid-sz7xmlte>3.1. Фамилия, имя, отчество.</p> <p data-astro-cid-sz7xmlte>3.2. Электронный адрес.</p> <p data-astro-cid-sz7xmlte>3.3. Номера телефонов.</p> <p data-astro-cid-sz7xmlte>3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других). </p> <p data-astro-cid-sz7xmlte>3.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.</p> <p data-astro-cid-sz7xmlte>4. Цели обработки персональных данных</p> <p data-astro-cid-sz7xmlte>4.1. Цель обработки персональных данных Пользователя — информирование Пользователя посредством отправки электронных писем; заключение, исполнение и прекращение гражданско-правовых договоров; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте.</p> <p data-astro-cid-sz7xmlte>4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты monolid2024@yandex.ru с пометкой «Отказ от уведомлениях о новых продуктах и услугах и специальных предложениях».</p> <p data-astro-cid-sz7xmlte>4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</p> <p data-astro-cid-sz7xmlte>5. Правовые основания обработки персональных данных</p> <p data-astro-cid-sz7xmlte>5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://monolid74.com. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</p> <p data-astro-cid-sz7xmlte>5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).</p> <p data-astro-cid-sz7xmlte>6. Порядок сбора, хранения, передачи и других видов обработки персональных данных</p> <p data-astro-cid-sz7xmlte>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</p> <p data-astro-cid-sz7xmlte>6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p> <p data-astro-cid-sz7xmlte>6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</p> <p data-astro-cid-sz7xmlte>6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора monolid2024@yandex.ru с пометкой «Актуализация персональных данных».</p> <p data-astro-cid-sz7xmlte>6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора monolid2024@yandex.ru с пометкой «Отзыв согласия на обработку персональных данных».</p> <p data-astro-cid-sz7xmlte>7. Трансграничная передача персональных данных</p> <p data-astro-cid-sz7xmlte>7.1 Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.</p> <p data-astro-cid-sz7xmlte>7.2 Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на− трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.</p> <p data-astro-cid-sz7xmlte>8. Заключительные положения</p> <p data-astro-cid-sz7xmlte>8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты monolid2024@yandex.ru</p> <p data-astro-cid-sz7xmlte>8.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.</p> </div>  `;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://monolid74.com/");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/public/y-1ujjAP65A.webp", websiteType = "website", robots = "index, follow" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/public/site.webmanifest"><meta name="generator"', '><meta name="yandex-verification" content="8f984d910ec5e410"><meta name="yandex-verification" content="c36214d2ab9fcd49"><!-- Font preloads --><link rel="preload" href="/fonts/Inter-Regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/Inter-Medium.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/Inter-Bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><link rel="sitemap" href="/sitemap-index.xml"><meta name="robots"', '><meta name="description"', '><meta name="keywords" content="\u041D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A\u0430, \u041D\u043E\u0432\u044B\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u041D\u043E\u0432\u044B\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A\u0430, \u0410\u0433\u0435\u043D\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438, \u0410\u0433\u0435\u043D\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A, \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C, \u0416\u0438\u043B\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441, \u0416\u0438\u043B\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A, \u0416\u0438\u043B\u044B\u0435 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A, \u0410\u043A\u0430\u0434\u0435\u043C \u0440\u0438\u0432\u0435\u0440\u0441\u0430\u0439\u0434, \u0410\u043A\u0430\u0434\u0435\u043C \u0440\u0438\u0432\u0435\u0440\u0441\u0430\u0439\u0434 \u043D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438"><meta name="HandheldFriendly" content="True"><meta name="MobileOptimized" content="320"><script type="application/ld+json">\n	{\n		"@context": "https://schema.org",\n		"@type": "WebSite",\n		"name": "\u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A \u2013 Monolid",\n		"alternateName": "\u041D\u0435\u0434\u0432\u0438\u0436\u0438\u043E\u0441\u0442\u044C \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A - Monolid",\n		"url": "https://monolid74.com/"\n	}\n<\/script><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:locale" content="ru_RU"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:type" content="image/webp"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="\u041D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438"><meta property="og:site_name" content="Monolid"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta name="twitter:image:alt" content="\u041D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438"><meta name="theme-color" content="#03283C"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="application-name" content="\u041C\u043E\u043D\u043E\u043B\u0438\u0434 - \u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A"><meta name="apple-mobile-web-app-title" content="Mobile rules"><meta name="apple-mobile-web-app-status-bar-style" content="#03283C"><!-- Yandex.Metrika counter --><script type="text/javascript">\n	(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n	m[i].l=1*new Date();\n	for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n	k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n	(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n \n	ym(97023741, "init", {\n		 clickmap:true,\n		 trackLinks:true,\n		 accurateTrackBounce:true,\n		 webvisor:true\n	});\n <\/script>', '<noscript><div><img src="https://mc.yandex.ru/watch/97023741" style="position:absolute; left:-9999px;" alt=""></div></noscript><!-- /Yandex.Metrika counter -->'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(robots, "content"), addAttribute(description, "content"), addAttribute(websiteType, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), maybeRenderHead());
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://monolid74.com/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 - \u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A - MonoliD \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C", "description": "", "robots": "noindex, nofollow", "data-astro-cid-zetdm5md": true })}${renderHead()}</head> <body data-astro-cid-zetdm5md> <div class="wrapper" data-astro-cid-zetdm5md> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-zetdm5md": true })} <main data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>Похоже, данная страница не существует.</h1> <a href="/" data-astro-cid-zetdm5md>На главную</a> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true })} </div> </body>`;
}, "C:/Users/\u0415\u0433\u043E\u0440/Desktop/projects/\u0441\u0430\u0439\u0442/monolid/monolid/jk/src/pages/404.astro", void 0);

const $$file = "C:/Users/Егор/Desktop/projects/сайт/monolid/monolid/jk/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Footer as $, _404 as _, $$Header as a, $$BaseHead as b, $$Image as c, getConfiguredImageService as g, imageConfig as i, sanityClient as s };
