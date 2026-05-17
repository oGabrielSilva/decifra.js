import { naturalsize } from 'decifra'

console.log('naturalsize (SI):')
console.log('  1 MB:        ', naturalsize(1_000_000))
console.log('  1.5 GB:      ', naturalsize(1_500_000_000))
console.log('  1 MB (pt-BR):', naturalsize(1_000_000, { locale: 'pt-BR' }))

console.log('\nnaturalsize (binary):')
console.log('  1 KiB:    ', naturalsize(1024, { binary: true }))
console.log('  976.6 KiB:', naturalsize(1_000_000, { binary: true }))

console.log('\nnaturalsize (GNU):')
console.log('  1K:', naturalsize(1024, { gnu: true }))
console.log('  1G:', naturalsize(1024 ** 3, { gnu: true }))

console.log('\nBytes pequenos:')
console.log('  1 Byte: ', naturalsize(1))
console.log('  0 Bytes:', naturalsize(0))
console.log('  1 byte (pt-BR):', naturalsize(1, { locale: 'pt-BR' }))
