console.log('Hello, new world2!');

type Words = {
    [key: string]: string;
};
class Word {
    constructor(public term: string, public definition: string) {}
}

class Dictionary {
    private words: Words;
    constructor() {
        this.words = {};
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.definition;
            return true;
        }
        return false;
    }

    get(term: string): string | undefined {
        return this.words[term];
    }

    delete(term: string): void {
        delete this.words[term];
    }

    update(word: Word): boolean {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.definition;
            return true;
        }
        console.log('Word not found');
        return false;
    }

    showAll(): void {
        for (const key in this.words) {
            console.log(`${key}: ${this.words[key]}`);
        }
    }

    count(): number {
        return Object.keys(this.words).length;
    }

    upsert(word: Word) {
        if (this.words[word.term] === undefined) {
            this.add(word);
        } else {
            this.update(word);
        }
    }

    exists(term: string) {
        if (this.words[term] !== undefined) {
            console.log('Word exists');
        }
        console.log('Word not found');
    }

    bulkAdd(words: Word[]) {
        words.forEach((word) => {
            this.add(word);
        });
    }

    bulkDelete(terms: string[]) {
        terms.forEach((term) => {
            this.delete(term);
        });
    }
}

const dic = new Dictionary();

// 단어 생성
let word1 = new Word('Hello', '인사말');
let word2 = new Word('World', '세계');
let word3 = new Word('AI', '인공지능');
let word4 = new Word('Hello', '인사말');
let word5 = new Word('World', '세계');
let word6 = new Word('AI', '인공지능');

// 단어 추가
dic.add(word1);
dic.add(word2);
dic.add(word3);

// 모든 단어 출력
dic.showAll();

// 단어 업데이트
let updatedWord = new Word('AI', '고급 인공지능');
dic.update(updatedWord);

// 업데이트된 단어 출력
console.log(dic.get('AI'));

// 단어 삭제
dic.delete('World');

// 삭제 후 모든 단어 출력
dic.showAll();

// upsert 메서드 테스트
dic.upsert(word4);
dic.upsert(word5);
dic.upsert(word6);

// 모든 단어 출력
dic.showAll();

// exists 메서드 테스트
dic.exists('AI'); // 'Word exists' 출력
dic.exists('Python'); // 'Word not found' 출력

// bulkAdd 메서드 테스트
let words = [
    new Word('Python', '프로그래밍 언어'),
    new Word('Java', '프로그래밍 언어'),
];
dic.bulkAdd(words);

// 모든 단어 출력
dic.showAll();

// bulkDelete 메서드 테스트
let terms = ['Hello', 'World'];
dic.bulkDelete(terms);

// 삭제 후 모든 단어 출력
dic.showAll();
