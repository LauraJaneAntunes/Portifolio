'use client'

import Layout from '../components/layout';
import Image from 'next/image';

export default function About() {
    return (
        <Layout>
            <div className="bg-gray-100 text-gray-800">
                <header className="p-6 bg-black text-white text-center">
                    <h1 className="text-4xl font-bold">Página em construção...</h1>
                </header>
                
                {/* Imagem do Ouriço Construtor */}
                <div className="flex flex-col items-center mt-8">
                    <Image 
                        src="/images/hedgehog-builder.png" 
                        alt="Ouriço construtor - Página em construção" 
                        width={400} 
                        height={400}
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
                        style={{
                          boxShadow: '0 0 15px blueviolet',
                          borderColor: 'blueviolet',
                          border: '4px solid blueviolet',
                          aspectRatio: '1 / 1'
                        }}
                    />
                </div>
            </div>
        </Layout>
    )
}