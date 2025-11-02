import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";


export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center gap-y-4'>
            <div>
                <Button variant='elevated'>
                    I am a button
                </Button>
            </div>
            <div className="w-64">
                <Input placeholder='I am an input'/>
            </div>
            <div className="w-64">
                <Progress value={50} />
            </div>
            <div className="w-64">
                <Textarea placeholder="I am an input"/>
            </div>
            <div className="w-64">
                <Checkbox/>
            </div>
        </div>
    );
}