import { naturalSize } from 'decifra.js'

console.log('naturalSize (SI):')
console.log('  1 MB:        ', naturalSize(1_000_000))
console.log('  1.5 GB:      ', naturalSize(1_500_000_000))
console.log('  1 MB (pt-BR):', naturalSize(1_000_000, { locale: 'pt-BR' }))

console.log('\nnaturalSize (binary):')
console.log('  1 KiB:    ', naturalSize(1024, { binary: true }))
console.log('  976.6 KiB:', naturalSize(1_000_000, { binary: true }))

console.log('\nnaturalSize (GNU):')
console.log('  1K:', naturalSize(1024, { gnu: true }))
console.log('  1G:', naturalSize(1024 ** 3, { gnu: true }))

console.log('\nBytes pequenos:')
console.log('  1 Byte: ', naturalSize(1))
console.log('  0 Bytes:', naturalSize(0))
console.log('  1 byte (pt-BR):', naturalSize(1, { locale: 'pt-BR' }))
