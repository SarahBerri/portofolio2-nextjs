import Image from 'next/image';
import React from 'react';
import KasaImg from '../public/assets/projects/kasa.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const kasa = () => {
    return (
        <div className='w-full'>
            <div className=' h-[117vh] w-full relative'>
                <div className='top-[260px] justify-center left-0 flex items-center w-full absolute h-0 object-cover fill-none'>
                    <Image
                        priority
                        src={KasaImg}
                        className="h-[270px] w-[360px] absolute rounded-lg"
                        width={360}
                        height={270}
                        alt="Image du projet Kasa"
                    />
                    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 top-[400px] relative'>
                        <div className='col-span-4'>
                            <h2 className='text-lg text-black'>Présentation du projet</h2>
                            <p className='pt-4'>
                                Ce sixième projet consistait en la création d’une application web
                                de location immobilière en suivant les maquettes Figma à disposition.
                            </p>
                            <Link
                                href='https://github.com/SDlevelUp/Kasa/tree/main/kasa'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-4 mr-8'>Code du projet</button>
                            </Link>
                            <Link
                                href='https://kasa-czfeh6f6q-sarahberri.vercel.app/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='px-8 py-2 mt-6'>Demo</button>
                            </Link>
                        </div>
                        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Langages</p>
                                <div className='grid grid-cols-3 md:grid-cols-1'>
                                    <p className='text-black py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> REACT
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link href='/#projects'>
                            <p className='underline cursor-pointer'>Retour</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default kasa;



