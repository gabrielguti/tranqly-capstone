import React, { useState } from 'react'
import { ModalCommentStyle } from './styles'
import { FaTimes } from 'react-icons/fa'
import Button from '../button'
import { UseAuth } from '../../providers/authProvider'

interface ModalCommentProps {
    show: any
    setShow: any
    createComment: (
        newComment: any,
        newScore: number,
        user: any,
        accessToken: string
    ) => void
}

export default function ModalComment({
    show,
    setShow,
    createComment,
}: ModalCommentProps) {
    const [newComment, setNewComment] = useState('')
    const [newScore, setNewScore] = useState(5)
    const { accessToken, user } = UseAuth()

    return (
        <ModalCommentStyle>
            <div>
                <FaTimes onClick={() => setShow(!show)} />
                <textarea
                    placeholder="Seu comentário..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <input
                    placeholder="Sua Nota"
                    value={newScore}
                    onChange={(e) => setNewScore(Number(e.target.value))}
                ></input>
                <Button
                    onClick={() =>
                        createComment(
                            newComment,
                            newScore,
                            user.id,
                            accessToken
                        )
                    }
                >
                    Comentar
                </Button>
            </div>
        </ModalCommentStyle>
    )
}
