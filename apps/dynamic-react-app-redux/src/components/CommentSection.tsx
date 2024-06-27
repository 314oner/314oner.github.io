//@ts-nocheck
import { RootState } from '@/store';
import { Alert, Button, Modal, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function CommentSection({ postId }: any) {
  const { currentUser } = useSelector((state: RootState) => state.user);

  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch('/api/comment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser.id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment('');
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getPostComments/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (e) {
        if (
          typeof e === 'object' &&
          e &&
          'message' in e &&
          typeof e.message === 'string'
        )
          console.log(e.message);
      }
    };
    getComments();
  }, [postId]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLike = async (commentId: any) => {
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/api/comment/likeComment/${commentId}`, {
        method: 'PUT',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment,
          ),
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEdit = async (comment: any, editedContent: any) => {
    setComments(
      comments.map((c) =>
        c._id === comment._id ? { ...c, content: editedContent } : c,
      ),
    );
  };

  const handleDelete = async (commentId: any) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/api/comment/deleteComment/${commentId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setComments(comments.filter((comment) => comment.id !== commentId));
      }
    } catch (e) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        console.log(e.message);
    }
  };
  return (
    <div className="w-full max-w-2xl p-3 mx-auto">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-sm text-gray-500">
          <p>Signed in as:</p>
          <img
            className="object-cover w-5 h-5 rounded-full"
            src={currentUser.profilePicture}
          />
          <Link
            to={'/dashboard?tab=profile'}
            className="text-xs text-cyan-600 hover:underline"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="flex gap-1 my-5 text-sm text-teal-500">
          You must be signed in to comment.
          <Link className="text-blue-500 hover:underline" to={'/sign-in'}>
            Sign In
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className="p-3 border border-teal-500 rounded-md"
        >
          <Textarea
            placeholder="Добавить комментарий..."
            rows="3"
            maxLength="200"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className="flex items-center justify-between mt-5">
            <p className="text-xs text-gray-500">
              {200 - comment.length} characters remaining
            </p>
            <Button outline gradientDuoTone="purpleToBlue" type="submit">
              Submit
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
        </form>
      )}
      {comments.length === 0 ? (
        <p className="my-5 text-sm">No comments yet!</p>
      ) : (
        <>
          <div className="flex items-center gap-1 my-5 text-sm">
            <p>Comments</p>
            <div className="px-2 py-1 border border-gray-400 rounded-sm">
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.map((comment) => (
            <div key={comment.id} comment={comment}></div>
          ))}
        </>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 text-gray-400 h-14 w-14 dark:text-gray-200" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this comment?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => handleDelete(commentToDelete)}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
