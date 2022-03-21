import Image from 'next/image'

export default function MenuShowcase () {
    return (
        <>
             <div className="flex justify-end">
                    <div className="absolute xl:hidden">
                        <Image
                            src="/img/sample.png"
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="invisible xl:visible pt-80">
                        <Image
                            src="/img/sample.png"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
        </>
    )
}